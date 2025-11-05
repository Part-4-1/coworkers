import React from "react";
import Icon from "../../../icon/Icon";
import Link from "next/link";
import Button from "@/components/button/button";
import cn from "@/utils/clsx";

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
      <Link href={"/"} className="flex items-center gap-[2px]">
        <Icon width={18} height={18} icon="logo" />
        {isSidebarOpen && (
          <h1 className="text-[20px] font-bold text-blue-200">COWORKERS</h1>
        )}
      </Link>
      <Button variant="none" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <Icon
          icon="leftFold"
          width={28}
          height={28}
          className={cn(
            "transition-transform",
            isSidebarOpen
              ? "rotate-0"
              : "m-3 h-8 w-8 rotate-180 rounded-full border border-gray-300 bg-white"
          )}
        />
      </Button>
    </header>
  );
};

export default SidebarHeader;
