import React from "react";
import { Icon, Button } from "@/components/index";
import Link from "next/link";
import cn from "@/utils/clsx";
import Image from "next/image";

/**
 * @author leohan
 * @description 사이드바 헤더입니다.
 * @param isSidebarOpen - 사이드바가 현재 열려있는지(true) 닫혀있는지(false)를 나타내는 상태 값
 * @param setIsSidebarOpen - 사이드바의 열림/닫힘 상태를 변경(설정)하는 상태 변경 함수
 */

interface SidebarHeaderProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarHeader = ({
  isSidebarOpen,
  setIsSidebarOpen,
}: SidebarHeaderProps) => {
  return (
    <header className="flex w-full max-w-[270px] items-center justify-between px-6 py-8">
      <Link href={"/"} className="flex flex-shrink-0 items-center gap-[2px]">
        <Image
          src={"/ic-coworkers-logo.svg"}
          alt="코워쿼스 로고"
          width={18}
          height={18}
        />
        {isSidebarOpen && (
          <h1 className="text-xl font-bold text-blue-200">COWORKERS</h1>
        )}
      </Link>
      <Button variant="none" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <Icon
          icon="leftFold"
          className={cn(
            "h-7 w-7 transition-transform",
            isSidebarOpen
              ? "rotate-0"
              : "mx-4 h-8 w-8 rotate-180 rounded-full border border-gray-300 bg-white p-1"
          )}
        />
      </Button>
    </header>
  );
};

export default SidebarHeader;
