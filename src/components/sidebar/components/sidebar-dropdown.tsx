"use client";

import { Dispatch, SetStateAction, useState } from "react";
import Icon from "../../icon/Icon";
import SidebarMenu from "./sidebar-menu";
import { motion, AnimatePresence } from "framer-motion";
import { mockUser } from "@/mocks/sidebar-data";

/**
 * @author leohan
 * @description Sidebar dropdown 컴포넌트
 */

interface SidebarDropdownProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  onToggle: () => void;
}

const SidebarDropdown = ({
  isOpen,
  setIsOpen,
  onToggle,
}: SidebarDropdownProps) => {
  const [selectedTitle, setSelectedTitle] = useState<string>(
    mockUser[0].memberships[0].group.name
  );
  return (
    <div className="w-full max-w-[238px]">
      <div
        onClick={onToggle}
        className="group flex cursor-pointer items-center justify-between rounded-xl px-4 py-2"
      >
        <div className="flex items-center gap-3">
          <Icon
            icon="chess"
            width={20}
            height={20}
            className="text-gray-400 group-hover:text-blue-200"
          />
          <span className="text-gray-700 group-hover:text-blue-200">
            팀 선택
          </span>
        </div>
        <Icon
          icon="downArrow"
          width={20}
          height={20}
          className={`text-gray-800 transition-transform duration-200 ease-in-out group-hover:text-gray-400 ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex flex-col items-start justify-start"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            {mockUser.map((user) => (
              <SidebarMenu
                key={user.id}
                title={user.memberships[0].group.name}
                iconName="chess"
                isSelected={user.memberships[0].group.name === selectedTitle}
                onClick={() => setSelectedTitle(user.memberships[0].group.name)}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SidebarDropdown;
