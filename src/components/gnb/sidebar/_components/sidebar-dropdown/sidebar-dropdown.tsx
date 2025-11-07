"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { Icon } from "@/components/index";
import SidebarMenu from "../sidebar-menu/sidebar-menu";
import { motion, AnimatePresence } from "framer-motion";
import { mockUser } from "@/mocks/sidebar-data";
import cn from "@/utils/clsx";
/**
 * @author leohan
 * @description Sidebar dropdown 컴포넌트
 */

interface SidebarDropdownProps {
  isOpen: boolean;
  isSidebarOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  onToggle: () => void;
  currentTeamId: string;
}

const iconStyles = {
  default: "text-gray-400 group-hover:text-blue-200 w-6 h-6",
  sidebarOpen: "w-5 h-5",
};

const SidebarDropdown = ({
  isOpen,
  setIsOpen,
  isSidebarOpen,
  onToggle,
  currentTeamId,
}: SidebarDropdownProps) => {
  return (
    <div className="w-full max-w-[238px]">
      <div
        onClick={onToggle}
        className={`group flex cursor-pointer justify-between rounded-xl py-2 ${isSidebarOpen ? "px-4" : "px-2"}`}
      >
        <div className="flex items-center gap-3">
          <Icon
            icon="chess"
            className={cn(
              iconStyles.default,
              isSidebarOpen && iconStyles.sidebarOpen
            )}
          />
          <AnimatePresence>
            {isSidebarOpen && (
              <motion.span
                className="whitespace-nowrap text-gray-700 group-hover:text-blue-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                팀 선택
              </motion.span>
            )}
          </AnimatePresence>
        </div>
        {isSidebarOpen && (
          <Icon
            icon="downArrow"
            className={`h-5 w-5 text-gray-800 transition-transform duration-200 ease-in-out group-hover:text-gray-400 ${isOpen ? "rotate-180" : "rotate-0"}`}
          />
        )}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex flex-col items-start justify-start"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            {mockUser[0].memberships.map((data) => (
              <SidebarMenu
                key={data.groupId}
                isSidebarOpen={isSidebarOpen}
                title={data.group.name}
                iconName="chess"
                isSelected={String(data.group.id) === currentTeamId}
                href={`/${mockUser[0].teamId}/groups/${data.group.id}`}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SidebarDropdown;
