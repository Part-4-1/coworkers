"use client";

import React, { useEffect, useState } from "react";
import SidebarHeader from "./components/sidebar-header";
import SidebarDropdown from "./components/sidebar-dropdown";
import SidebarFooter from "./components/sidebar-footer";
import Button from "../../button/button";
import Icon from "../../icon/Icon";
import SidebarMenu from "./components/sidebar-menu";
import cn from "@/utils/clsx";
import { AnimatePresence, motion } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";

/**
 * @author leohan
 * @description 데스크톱 환경에서 사용되는 메인 네비게이션 사이드바 컴포넌트입니다.
 * 뷰포트 크기에 따라 기본 열림/닫힘 상태가 결정되며, 사용자 상호작용에 의해 너비가 애니메이션됩니다.
 */

const PC_BREAKPOINT = "(min-width: 1280px)";

const Sidebar = () => {
  const isDesktop = useMediaQuery(PC_BREAKPOINT);

  const [isSidebarOpen, _setIsSidebarOpen] = useState(false);
  const [isUserSidebarOpen, setIsUserSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const setIsSidebarOpen = (value: React.SetStateAction<boolean>) => {
    setIsUserSidebarOpen(true);
    _setIsSidebarOpen(value);
  };

  useEffect(() => {
    _setIsSidebarOpen(isDesktop);
    setIsUserSidebarOpen(false);
  }, [isDesktop]);

  const handleToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const isTeamExist = true; // 임시 팀 존재 확인
  const isLoggedIn = true; // 임시 로그인 확인

  return (
    <motion.aside
      animate={{
        width: isSidebarOpen ? 270 : 73,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn(
        "fixed left-0 top-0 flex h-screen flex-col justify-between border-r border-gray-300 bg-white"
      )}
    >
      <div>
        <SidebarHeader
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        {isLoggedIn && (
          <div className="flex flex-1 flex-col justify-between px-4">
            <div className="flex flex-col gap-3">
              {isTeamExist && (
                <div
                  className={`flex flex-col gap-2 ${isSidebarOpen && "border-b border-gray-300 pb-6"}`}
                >
                  <SidebarDropdown
                    isSidebarOpen={isSidebarOpen}
                    isOpen={isDropdownOpen}
                    setIsOpen={setIsDropdownOpen}
                    onToggle={handleToggle}
                  />
                  <AnimatePresence>
                    {isSidebarOpen && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <Button
                          variant="outlined"
                          className="w-full max-w-[238px] whitespace-nowrap px-4 py-2 text-md"
                        >
                          + 팀 추가하기
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
              <SidebarMenu
                iconName="board"
                isSidebarOpen={isSidebarOpen}
                title="자유게시판"
                onClick={() => {}}
              />
            </div>
          </div>
        )}
      </div>
      <div className={isSidebarOpen ? "px-4" : "px-5"}>
        <SidebarFooter isSidebarOpen={isSidebarOpen} />
      </div>
    </motion.aside>
  );
};

export default Sidebar;
