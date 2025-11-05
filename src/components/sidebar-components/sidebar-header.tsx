import React from "react";
import Icon from "../icon/Icon";
import Link from "next/link";

const SidebarHeader = () => {
  return (
    <header className="flex w-full max-w-[270px] items-center justify-between px-6 py-8">
      <Link href={"/"} className="flex items-center gap-[2px]">
        <Icon icon="logo" className="h-[18px] w-[18px]" />
        <h1 className="text-[20px] font-bold text-blue-200">COWORKERS</h1>
      </Link>
      <Icon icon="leftFold" className="h-7 w-7" />
    </header>
  );
};

export default SidebarHeader;
