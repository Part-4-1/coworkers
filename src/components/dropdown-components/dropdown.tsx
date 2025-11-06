"use client";

import { Button, Icon } from "@/components/index";
import useClickOutside from "@/hooks/click-outside/use-click-outside";
import cn from "@/utils/clsx";
import { useRef, useState } from "react";
/**
 * @author jinhyuk
 * @description Dropdown 컴포넌트는 props로 받는 trigger를 클릭하면 드롭다운
 * 메뉴가 펼쳐지고 선택할 수 있는 컴포넌트입니다.
 * @param trigger - 드롭다운 메뉴를 펼치는 트리거 요소
 * @param items - 드롭다운 메뉴 항목 배열 {label, onClick}
 * @param textAlign - 드롭다운 메뉴의 텍스트 정렬 방식 (기본값: center)
 * @param menuAlign - 드롭다운 메뉴의 정렬 기준 (기본값: end)
 * @param isWidthFull - 메뉴의 width를 트리거의 width와 동일하게 설정할지 여부 (기본값: false)
 * @param isDirectionDown - 메뉴가 나타나는 방향을 설정 (기본값: true)
 * @param className - 추가 스타일을 부여하기 위해 사용
 */

interface DropdownProps {
  trigger?: React.ReactNode;
  items: DropdownItem[];
  defaultLabel?: React.ReactNode;
  textAlign?: "start" | "center" | "end";
  menuAlign?: "start" | "center" | "end";
  isWidthFull?: boolean;
  isDirectionDown?: boolean;
  className?: string;
  defaultTriggerClassName?: string;
}

interface DropdownItem {
  label: React.ReactNode;
  onClick?: () => void;
}

const Dropdown = ({
  trigger,
  items,
  defaultLabel,
  textAlign = "center",
  menuAlign = "end",
  isWidthFull = false,
  isDirectionDown = true,
  className,
  defaultTriggerClassName,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const initialLabel: React.ReactNode = defaultLabel ?? items?.[0].label ?? "";
  const [selectedLabel, setSelectedLabel] =
    useState<React.ReactNode>(initialLabel);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (index: number) => {
    setSelectedLabel(items[index].label);
    items[index].onClick?.();
    setIsOpen(false);
  };

  const textAlignClass = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
  }[textAlign];

  const menuAlignClass = {
    start: "left-0",
    center: "left-1/2 -translate-x-1/2 transform",
    end: "right-0",
  }[menuAlign];

  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => setIsOpen(false), isOpen);

  const DefaultTrigger = (
    <Button
      variant="outlined-secondary"
      className={cn(
        "h-[40px] w-[120px] border border-gray-300 tablet:h-[44px]",
        "rounded-[8px] tablet:rounded-[12px]",
        "flex items-center !justify-between px-[14px]",
        "text-xs font-medium text-gray-800",
        isOpen ? "bg-gray-300 text-blue-700" : "bg-white",
        defaultTriggerClassName
      )}
    >
      {selectedLabel}
      <Icon icon="downArrow" className="h-[24px] w-[24px]"></Icon>
    </Button>
  );

  return (
    <div className={cn("relative inline-block", className)} ref={dropdownRef}>
      <div onClick={toggleDropdown} className="cursor-pointer select-none">
        {trigger ?? DefaultTrigger}
      </div>
      {isOpen && (
        <div
          className={cn(
            "absolute z-50 rounded-[12px] border border-gray-300 bg-white text-blue-700 shadow-sm",
            isDirectionDown ? "top-full mt-2" : "bottom-full mb-2",
            menuAlignClass,
            isWidthFull ? "w-full" : "w-max"
          )}
        >
          <ul>
            {items.map(({ label }, i) => (
              <li
                key={i}
                onClick={() => handleItemClick(i)}
                className={cn(
                  "flex w-auto cursor-pointer items-center px-[18px] py-[12px] pc:px-[20px] pc:py-[14px]",
                  "transition-colors first:rounded-t-[12px] last:rounded-b-[12px] hover:bg-gray-300",
                  textAlignClass
                )}
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
