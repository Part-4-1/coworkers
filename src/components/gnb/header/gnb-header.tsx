"use client";

import { Button, Dropdown, Icon, Profile } from "@/components/index";
import Link from "next/link";
import MobileSidebar from "./mobile-sidebar";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

/**
 * @author leohan
 * @description 모바일/태블릿 환경(375px 이하)에서 사용되는 상단 네비게이션 바(GNB) 컴포넌트입니다.
 * 로그인 상태에 따라 두 가지 레이아웃(로그인된 사용자 메뉴 vs. 로고만)을 조건부로 렌더링합니다.
 */

const GnbHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isLoggedIn = true;

  return (
    <div className="w-full max-w-[375px] border-b border-gray-300">
      {isLoggedIn ? (
        <div className="flex justify-between pl-4 pr-[14px]">
          <div className="flex gap-3 py-[14px]">
            <Button variant="none" onClick={() => setIsOpen(true)}>
              <Icon icon="menu" className="h-6 w-6" />
            </Button>

            <Link href={"/"}>
              <Icon icon="logo" className="h-6 w-6" />
            </Link>
          </div>
          <div className="relative my-3 h-7 w-7 rounded-full">
            <Dropdown
              trigger={<Profile size="md" />}
              items={[
                { label: "마이 히스토리" },
                { label: "계정 설정" },
                { label: "팀 참여" },
                { label: "로그아웃" },
              ]}
              isWidthFull={false}
            />
          </div>
          <AnimatePresence>
            {isOpen && (
              <MobileSidebar
                onClose={() => {
                  setIsOpen(false);
                }}
              />
            )}
          </AnimatePresence>
        </div>
      ) : (
        <Link
          href={"/"}
          className="flex items-center justify-start gap-[3px] p-4"
        >
          <Icon icon="logo" className="h-4 w-4" />
          <h1 className="text-[12.5px] font-bold text-blue-200">COWORKERS</h1>
        </Link>
      )}
    </div>
  );
};

export default GnbHeader;
