"use client";

import cn from "@/utils/clsx";
import { useEffect, useRef, useState } from "react";

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
