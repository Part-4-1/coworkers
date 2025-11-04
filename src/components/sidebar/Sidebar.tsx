"use client";

import React, { useState } from "react";
import SidebarHeader from "./components/sidebar-header";
import SidebarDropdown from "./components/sidebar-dropdown";
import SidebarFooter from "./components/sidebar-footer";
import Button from "../button/button";
import Icon from "../icon/Icon";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <aside className="fixed left-0 top-0 flex h-screen w-full max-w-[270px] flex-col border-r border-gray-300 bg-white">
      <SidebarHeader />
      <div className="flex flex-1 flex-col justify-between overflow-y-auto px-3">
        <div className="flex flex-col gap-2 border-b border-gray-300 pb-6">
          <SidebarDropdown
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            onToggle={handleToggle}
          />
          <Button
            variant="outlined"
            className="w-full max-w-[238px] px-3 py-2 text-md"
          >
            + 팀 추가하기
          </Button>
        </div>
        <SidebarFooter />
      </div>
    </aside>
  );
};

export default Sidebar;
