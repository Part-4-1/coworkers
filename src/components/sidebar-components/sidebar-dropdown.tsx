"use client";

import { useState } from "react";
import Icon from "../icon/Icon";
import SidebarMenu from "./sidebar-menu";
import { mockTeams } from "./mock-team";
import { motion, AnimatePresence } from "framer-motion";

/**
 * @author leohan
 * @description Sidebar dropdown 컴포넌트
 */

interface SidebarDropdownProps {
  isOpen?: boolean;
  onClose: () => void;
}

const dropdownStyles = {
  base: "text-gray-700",
  active: "text-blue-200",
};

const SidebarDropdown = ({ isOpen, onClose }: SidebarDropdownProps) => {
  const [selectedTitle, setSelectedTitle] = useState<string>(
    mockTeams[0].title
  );
  return (
    <div className="w-full max-w-[238px]">
      <div
        onClick={onClose}
        className="group flex cursor-pointer items-center justify-between rounded-xl px-4 py-2"
      >
        <div className="flex items-center gap-3">
          <Icon
            icon="chess"
            width={20}
            height={20}
            className="text-gray-700 group-hover:text-blue-200"
          />
          <span className="text-gray-700 group-hover:text-blue-200">
            팀 선택
          </span>
        </div>
        <Icon
          icon="downArrow"
          width={20}
          height={20}
          className="text-gray-800 group-hover:text-gray-400"
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
          >
            {mockTeams.map((menu) => (
              <SidebarMenu
                key={menu.title}
                title={menu.title}
                IconComponent={Icon}
                iconName={menu.iconName}
                isSelected={menu.title === selectedTitle}
                onClick={() => setSelectedTitle(menu.title)}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SidebarDropdown;
