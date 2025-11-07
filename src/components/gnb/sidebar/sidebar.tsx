"use client";

import React, { useEffect, useState } from "react";
import SidebarHeader from "./_components/sidebar-header/sidebar-header";
import SidebarDropdown from "./_components/sidebar-dropdown/sidebar-dropdown";
import SidebarFooter from "./_components/sidebar-footer/sidebar-footer";
import { Button } from "@/components/index";
import SidebarMenu from "./_components/sidebar-menu/sidebar-menu";
import cn from "@/utils/clsx";
import { AnimatePresence, motion } from "framer-motion";
import useMediaQuery from "@/hooks/use-media-query";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { useGetUserInfoQuery } from "@/hooks/api/user/use-get-user-info-query";

/**
 * @author leohan
 * @description 데스크톱 환경에서 사용되는 메인 네비게이션 사이드바 컴포넌트입니다.
 * 뷰포트 크기에 따라 기본 열림/닫힘 상태가 결정되며, 사용자 상호작용에 의해 너비가 애니메이션됩니다.
 */

const PC_BREAKPOINT = "(min-width: 1280px)";
const BETWEEN_MOBILE_PC_BREAKPOINT =
  "(min-width: 376px) and (max-width: 1279px)";

const Sidebar = () => {
  const isDesktop = useMediaQuery(PC_BREAKPOINT);
  const isTablet = useMediaQuery(BETWEEN_MOBILE_PC_BREAKPOINT);
  const pathname = usePathname();
  const segments = pathname.split("/");
  const currentTeamId = segments[segments.length - 1];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { data: userInfo, isLoading } = useGetUserInfoQuery();

  const isLoggedIn = !!userInfo && !isLoading;
  const isTeamExist = (userInfo?.memberships?.length ?? 0) > 0;

  useEffect(() => {
    setIsSidebarOpen(isDesktop);
  }, [isDesktop]);

  useEffect(() => {
    const isLockScroll = isTablet && isSidebarOpen;

    if (isLockScroll) {
      const html = document.documentElement;
      const scrollBarWidth = window.innerWidth - html.clientWidth;

      html.style.overflow = "hidden";
      html.style.paddingRight = `${scrollBarWidth}px`;
    }

    return () => {
      const html = document.documentElement;
      html.style.overflow = "auto";
      html.style.paddingRight = "0px";
    };
  }, [isTablet, isSidebarOpen]);

  const handleToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return createPortal(
    <>
      {isSidebarOpen && isTablet && (
        <div
          className="fixed inset-0 z-10 bg-black opacity-50"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <motion.aside
        animate={{
          width: isSidebarOpen ? 270 : 73,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={
          "fixed left-0 top-0 z-20 flex h-screen flex-col justify-between border-r border-gray-300 bg-white"
        }
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
                      currentTeamId={currentTeamId}
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
                  href={"/article"}
                />
              </div>
            </div>
          )}
        </div>
        <div className={isSidebarOpen ? "px-4" : "px-5"}>
          <SidebarFooter isSidebarOpen={isSidebarOpen} />
        </div>
      </motion.aside>
    </>,
    document.body
  );
};

export default Sidebar;
