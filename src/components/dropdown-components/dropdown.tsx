"use client";

import { Button, Icon } from "@/components/index";
import useClickOutside from "@/hooks/click-outside/use-click-outside";
import cn from "@/utils/clsx";
import { cloneElement, useRef, useState } from "react";
/**
 * @author jinhyuk
 * @description Dropdown 컴포넌트는 props로 받는 trigger를 클릭하면 드롭다운
 * 메뉴가 펼쳐지고 선택할 수 있는 컴포넌트입니다.
 * @param trigger - 드롭다운 메뉴를 펼치는 트리거 요소
 * @param items - 드롭다운 메뉴 항목 배열 {label, onClick, addon}
 *  @param items.label - 드롭다운 메뉴에 표시될 문자열
 *  @param items.onClick - 해당 메뉴 클릭 시 실행되는 콜백 함수
 *  @param items.addon - 트리거 버튼 label 오른쪽에 표시되는 추가 컴포넌트 (예: Badge)
 * @param textAlign - 드롭다운 메뉴의 텍스트 정렬 방식 (기본값: center)
 * @param menuAlign - 드롭다운 메뉴의 정렬 기준 (기본값: end)
 * @param isWidthFull - 메뉴의 width를 트리거의 width와 동일하게 설정할지 여부 (기본값: false)
 * @param isDirectionDown - 메뉴가 나타나는 방향을 설정 (기본값: true)
 * @param className - Dropdown 전체 컨테이너에 추가할 클래스
 * @param defaultTriggerClassName - 기본 트리거(Button)에 커스텀 스타일을 적용하기 위한 클래스
 */

interface DropdownProps {
  trigger?: React.ReactNode;
  items: DropdownItem[];
  textAlign?: "start" | "center" | "end";
  menuAlign?: "start" | "center" | "end";
  isWidthFull?: boolean;
  isDirectionDown?: boolean;
  className?: string;
  defaultTriggerClassName?: string;
}

interface DropdownItem {
  label: string;
  onClick?: () => void;
  addon?: React.ReactElement<{ className?: string }>;
}

const Dropdown = ({
  trigger,
  items,
  textAlign = "center",
  menuAlign = "end",
  isWidthFull = false,
  isDirectionDown = true,
  className,
  defaultTriggerClassName,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const initialLabel = items[0].label;
  const [selectedLabel, setSelectedLabel] = useState<string>(initialLabel);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (index: number) => {
    setSelectedIndex(index);
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

  const arrowRotation = isDirectionDown
    ? isOpen
      ? "rotate-180"
      : "rotate-0"
    : isOpen
      ? "rotate-0"
      : "rotate-180";

  const selectedItem = items[selectedIndex];
  const triggerAddon = selectedItem.addon
    ? isOpen
      ? cloneElement(selectedItem.addon, {
          className: cn(selectedItem.addon.props.className, "bg-gray-300"),
        })
      : selectedItem.addon
    : null;

  const DefaultTrigger = (
    <Button
      variant="outlined-secondary"
      className={cn(
        "h-[40px] w-[120px] border border-gray-300",
        "rounded-[8px] tablet:rounded-[12px]",
        "flex items-center !justify-between px-[14px]",
        "text-xs font-medium text-gray-800",
        isOpen ? "bg-gray-300 text-blue-700" : "bg-white",
        defaultTriggerClassName
      )}
    >
      <div className="flex items-center gap-[8px]">
        {selectedLabel}
        {triggerAddon}
      </div>
      <Icon
        icon="downArrow"
        className={cn("h-[24px] w-[24px]", arrowRotation)}
      ></Icon>
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
                key={label}
                onClick={() => handleItemClick(i)}
                className={cn(
                  "flex w-auto cursor-pointer items-center px-[18px] py-[12px] pc:px-[20px] pc:py-[14px]",
                  "text-sm transition-colors first:rounded-t-[12px] last:rounded-b-[12px] hover:bg-gray-300",
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
