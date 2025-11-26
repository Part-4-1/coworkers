"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Button, Icon } from "@/components/index";
import SidebarMenu from "../sidebar/_components/sidebar-menu/sidebar-menu";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useGetUserInfoQuery } from "@/hooks/api/user/use-get-user-info-query";
import Link from "next/link";
import cn from "@/utils/clsx";

interface MobileSidebarProps {
  onClose: () => void;
}

const MobileSidebar = ({ onClose }: MobileSidebarProps) => {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const currentTeamId = segments[segments.length - 1];
  const isBoardPage = pathname === "/boards";
  const isMyHistoryPage = pathname === "/myhistory";
  const { data: userInfo } = useGetUserInfoQuery();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return isMounted
    ? createPortal(
        <>
          <div
            className="fixed inset-0 z-10 bg-black opacity-50"
            onClick={onClose}
          />
          <motion.div
            className="fixed left-0 top-0 z-20 flex h-full w-[204px] flex-col gap-5 border-r border-gray-300 bg-white p-4 pr-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1, ease: "easeIn" }}
          >
            <div className="flex w-full justify-end">
              <Button variant="none" onClick={onClose}>
                <Icon icon="x" className="mr-4 h-5 w-5" />
              </Button>
            </div>
            <hr className="mr-4" />
            <div className="flex flex-col gap-3">
              <div
                className="mr-4 flex flex-col gap-2 border-b border-gray-300 pb-6"
                onClick={onClose}
              >
                <div
                  className={cn(
                    "max-h-[300px] overflow-y-auto",
                    "max-h-[300px] overflow-y-auto",
                    "[&::-webkit-scrollbar]:w-1.5",
                    "[&::-webkit-scrollbar-track]:bg-transparent",
                    "[&::-webkit-scrollbar-thumb]:rounded-full",
                    "[&::-webkit-scrollbar-thumb]:bg-transparent",

                    "[&::-webkit-scrollbar-thumb]:bg-gray-300"
                  )}
                >
                  {userInfo?.memberships?.map((data) => (
                    <SidebarMenu
                      key={data.groupId}
                      title={data.group.name}
                      iconName="chess"
                      isSelected={String(data.group.id) === currentTeamId}
                      href={`/${data.group.id}`}
                      className="h-[44px]"
                    />
                  ))}
                </div>
                <Link href="/addteam">
                  <Button className="w-full max-w-[172px] whitespace-nowrap border border-blue-200 px-3 py-2 text-md">
                    + 팀 생성하기
                  </Button>
                </Link>
                <Link href="/taketeam">
                  <Button
                    variant="outlined"
                    className="w-full max-w-[172px] whitespace-nowrap px-3 py-2 text-md"
                  >
                    + 팀 참여하기
                  </Button>
                </Link>
              </div>
              <div onClick={onClose}>
                <SidebarMenu
                  iconName="board"
                  title="자유게시판"
                  href={"/boards"}
                  className="h-[44px]"
                  fontStyle="h-[17px]"
                  isSelected={isBoardPage ? true : false}
                />
                <SidebarMenu
                  iconName="board"
                  title="마이 히스토리"
                  href={"/myhistory"}
                  className="h-[44px]"
                  fontStyle="h-[17px]"
                  isSelected={isMyHistoryPage ? true : false}
                />
              </div>
            </div>
          </motion.div>
        </>,
        document.body
      )
    : null;
};

export default MobileSidebar;
