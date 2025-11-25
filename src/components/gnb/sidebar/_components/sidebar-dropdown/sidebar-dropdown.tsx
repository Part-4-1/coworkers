"use client";

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { Icon } from "@/components/index";
import SidebarMenu from "../sidebar-menu/sidebar-menu";
import { motion, AnimatePresence } from "framer-motion";
import cn from "@/utils/clsx";
import { tooltipStyles } from "@/constants/styles";
import { useGetUserInfoQuery } from "@/hooks/api/user/use-get-user-info-query";
import { useTooltip } from "@/hooks/use-tooltip";
import { createPortal } from "react-dom";

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
  const sidebarRef = useRef<HTMLDivElement>(null);

  const { data: userInfo } = useGetUserInfoQuery();

  const selectedMembership = userInfo?.memberships?.find(
    (membership) => String(membership.group.id) === currentTeamId
  );
  const selectedTeamName = selectedMembership
    ? selectedMembership.group.name
    : "팀 선택";

  const { isHovered, tooltipPosition, handleMouseEnter, handleMouseLeave } =
    useTooltip(isSidebarOpen);

  useEffect(() => {
    const sidebarElement = sidebarRef.current;

    if (!isSidebarOpen && sidebarElement) {
      sidebarElement.style.paddingRight = "";
      return;
    }
    if (!sidebarElement) return;

    const updatePadding = () => {
      const scrollBarWidth =
        sidebarElement.offsetWidth - sidebarElement.clientWidth;

      const basePadding = 16;
      const newPadding = Math.max(basePadding - scrollBarWidth, 0);

      sidebarElement.style.paddingRight = `${newPadding}px`;
    };

    updatePadding();

    const observer = new ResizeObserver(() => {
      updatePadding();
    });

    observer.observe(sidebarElement);

    return () => observer.disconnect();
  }, [isSidebarOpen]);

  return (
    <div
      className={cn(
        "w-full max-w-[255px] pr-4",
        isSidebarOpen
          ? "max-h-[300px] overflow-y-auto overflow-x-hidden"
          : "max-h-[300px] overflow-y-auto overflow-x-visible scrollbar-hide"
      )}
      ref={sidebarRef}
    >
      <div
        onClick={onToggle}
        className={`group relative flex cursor-pointer justify-between rounded-xl py-2 ${isSidebarOpen ? "px-4" : "px-2"}`}
      >
        <div
          className="flex min-w-0 items-center gap-3"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Icon
            icon="chess"
            className={cn(
              iconStyles.default,
              isSidebarOpen && iconStyles.sidebarOpen,
              !!selectedMembership && "text-blue-200",
              "flex-shrink-0"
            )}
          />
          <AnimatePresence>
            {isSidebarOpen && (
              <motion.span
                className={cn(
                  "truncate text-gray-700 group-hover:text-blue-200",
                  !!selectedMembership && "text-blue-200"
                )}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                {selectedTeamName}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
        {/* {!isSidebarOpen && !isOpen && (
          <span className={cn(tooltipStyles.base, tooltipStyles.before)}>
            {selectedTeamName}
          </span>
        )} */}
        {!isSidebarOpen &&
          !isOpen &&
          isHovered &&
          createPortal(
            <span
              className={cn(tooltipStyles.base, tooltipStyles.before)}
              style={{ top: tooltipPosition.top, left: tooltipPosition.left }}
            >
              {selectedTeamName}
            </span>,
            document.body
          )}
        {isSidebarOpen && (
          <Icon
            icon="downArrow"
            className={`h-5 w-5 shrink-0 text-gray-800 transition-transform duration-200 ease-in-out group-hover:text-gray-400 ${isOpen ? "rotate-180" : "rotate-0"}`}
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
            {userInfo?.memberships?.map((data) => (
              <SidebarMenu
                key={data.groupId}
                isSidebarOpen={isSidebarOpen}
                title={data.group.name}
                iconName="chess"
                isSelected={String(data.group.id) === currentTeamId}
                href={`/${data.group.id}`}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SidebarDropdown;
