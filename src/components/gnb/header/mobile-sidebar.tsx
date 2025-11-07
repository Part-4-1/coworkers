"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Button, Icon } from "@/components/index";
import { mockUser } from "@/mocks/sidebar-data";
import SidebarMenu from "../sidebar/_components/sidebar-menu/sidebar-menu";
import { usePathname } from "next/navigation";
import { easeOut, motion } from "framer-motion";

interface MobileSidebarProps {
  onClose: () => void;
}

const MobileSidebar = ({ onClose }: MobileSidebarProps) => {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const currentTeamId = segments[segments.length - 1];

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
            className="fixed left-0 top-0 z-20 flex h-full w-[204px] flex-col gap-7 border-r border-gray-300 bg-white p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1, ease: "easeIn" }}
          >
            <div className="flex w-full justify-end">
              <Button variant="none" onClick={onClose}>
                <Icon icon="x" className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2 border-b border-gray-300 pb-6">
                {mockUser[0].memberships.map((data) => (
                  <SidebarMenu
                    key={data.groupId}
                    title={data.group.name}
                    iconName="chess"
                    isSelected={String(data.group.id) === currentTeamId}
                    href={`/${mockUser[0].teamId}/groups/${data.group.id}`}
                  />
                ))}
                <Button
                  variant="outlined"
                  className="w-full max-w-[172px] whitespace-nowrap px-3 py-2 text-md"
                >
                  + 팀 추가하기
                </Button>
              </div>
              <SidebarMenu
                iconName="board"
                title="자유게시판"
                href={"/article"}
              />
            </div>
          </motion.div>
        </>,
        document.body
      )
    : null;
};

export default MobileSidebar;
