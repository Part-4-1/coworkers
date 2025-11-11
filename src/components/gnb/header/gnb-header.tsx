"use client";

import Button from "@/components/button/button";
import Dropdown from "@/components/dropdown-components/dropdown";
import Icon from "@/components/icon/Icon";
import Profile from "@/components/profile/profile";
import Link from "next/link";
import MobileSidebar from "./mobile-sidebar";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useGetUserInfoQuery } from "@/hooks/api/user/use-get-user-info-query";
import { useRouter } from "next/navigation";
import { logoutAction } from "@/api/auth/logout-action";
/**
 * @author leohan
 * @description 모바일/태블릿 환경(375px 이하)에서 사용되는 상단 네비게이션 바(GNB) 컴포넌트입니다.
 * 로그인 상태에 따라 두 가지 레이아웃(로그인된 사용자 메뉴 vs. 로고만)을 조건부로 렌더링합니다.
 */

const GnbHeader = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const { data: userInfo, isLoading } = useGetUserInfoQuery();
  const isLoggedIn = !!userInfo && !isLoading;

  return (
    <div className="w-full border-b border-gray-300 bg-white">
      {isLoggedIn ? (
        <div className="flex justify-between pl-4 pr-[14px]">
          <div className="flex items-center gap-3 py-[14px]">
            <Button variant="none" onClick={() => setIsOpen(true)}>
              <Icon icon="menu" className="h-6 w-6" />
            </Button>

            <Link href={"/"}>
              <Image
                src={"/ic-coworkers-logo.svg"}
                alt="코워쿼스 로고"
                width={21}
                height={21}
              />
            </Link>
          </div>
          <div className="relative my-3 h-7 w-7 rounded-full">
            <Dropdown
              trigger={<Profile size="md" />}
              items={[
                {
                  label: "마이 히스토리",
                  onClick: () => router.push("/user/history"),
                },
                {
                  label: "계정 설정",
                  onClick: () => router.push("/user/Setting"),
                },
                { label: "팀 참여", onClick: () => router.push("/team/") },
                {
                  label: "로그아웃",
                  onClick: () => {
                    logoutAction();
                  },
                },
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
        <div className="p-4">
          <Link href={"/"}>
            <Image
              src={"/ic-coworkers-logo.svg"}
              alt="코워쿼스 로고"
              width={16}
              height={16}
              className="mr-[2px] inline-block"
            />
            <h1 className="inline-block text-[12.5px] font-bold text-blue-200">
              COWORKERS
            </h1>
          </Link>
        </div>
      )}
    </div>
  );
};

export default GnbHeader;
