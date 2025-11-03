"use client";

import cn from "@/utils/clsx";
import { useEffect, useRef, useState } from "react";

/**
 * @author jinhyuk
 * @description Dropdown 컴포넌트는 props로 받는 trigger를 클릭하면 드롭다운
 * 메뉴가 펼쳐지고 선택할 수 있는 컴포넌트입니다.
 * @param trigger - 드롭다운 메뉴를 펼치는 트리거 요소
 * @param items - 드롭다운 메뉴 항목 배열 {label, onClick}
 * @param textAlign - 드롭다운 메뉴의 텍스트 정렬 방식 (기본값: center)
 * @param menuAign - 드롭다운 메뉴의 정렬 기준 (기본값: end)
 * @param isWidthSameWidthTrigger - 메뉴의 width를 트리거의 width와 동일하게 설정할지 여부 (기본값: true)
 */

interface DropdownProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
  textAlign?: "start" | "center" | "end";
  menuAlign?: "start" | "center" | "end";
  isWidthSameWidthTrigger?: boolean;
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
  isWidthSameWidthTrigger: isWidthFull = true,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (onClick?: () => void) => {
    if (onClick) onClick();
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

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <div onClick={toggleDropdown} className="cursor-pointer select-none">
        {trigger}
      </div>
      {isOpen && (
        <div
          className={cn(
            "absolute top-full z-50 mt-2 rounded-[12px] border border-gray-300 bg-white text-blue-700 shadow-sm",
            menuAlignClass,
            isWidthFull ? "w-full" : "w-max min-w-[110px] max-w-[150px]"
          )}
        >
          <ul>
            {items.map(({ label, onClick }, i) => (
              <li
                key={i}
                onClick={() => handleItemClick(onClick)}
                className={cn(
                  "flex w-auto cursor-pointer items-center px-[18px] py-[12px] pc:px-[20px] pc:py-[14px]",
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
