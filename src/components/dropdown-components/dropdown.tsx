"use client";

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
  trigger: React.ReactNode;
  items: DropdownItem[];
  textAlign?: "start" | "center" | "end";
  menuAlign?: "start" | "center" | "end";
  isWidthFull?: boolean;
  isDirectionDown?: boolean;
  className?: string;
}

interface DropdownItem {
  label: string;
  onClick?: () => void;
}

const Dropdown = ({
  trigger,
  items,
  textAlign = "center",
  menuAlign = "end",
  isWidthFull = false,
  isDirectionDown = true,
  className,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (e: React.MouseEvent) => {
    const index = Number((e.target as HTMLLIElement).dataset.index);
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

  return (
    <div className={cn("relative inline-block", className)} ref={dropdownRef}>
      <div onClick={toggleDropdown} className="cursor-pointer select-none">
        {trigger}
      </div>
      {isOpen && (
        <div
          className={cn(
            "absolute z-50 rounded-[12px] border border-gray-300 bg-white text-blue-700 shadow-sm",
            isDirectionDown ? "top-full mt-2" : "bottom-full mb-2",
            menuAlignClass,
            isWidthFull ? "w-full" : "w-max min-w-[110px] max-w-[150px]"
          )}
        >
          <ul onClick={handleItemClick}>
            {items.map(({ label }, i) => (
              <li
                key={label}
                data-index={i}
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
