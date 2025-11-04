"use client"; // 👈 [1] 클라이언트 컴포넌트로 전환

import React, { useState } from "react"; // 👈 [2] useState 임포트
import { SidebarDropdown } from "@/components"; // SidebarDropdown 컴포넌트 임포트
import SidebarHeader from "@/components/sidebar-components/sidebar-header";

const Page = () => {
  // 👈 [3] Storybook에서처럼 상태 관리 추가
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <SidebarHeader />
      <SidebarDropdown
        isOpen={isOpen} // 👈 [4] 상태(state) 전달
        onToggle={() => setIsOpen(!isOpen)} // 👈 [5] 상태 변경 함수 전달
      />
    </div>
  );
};

export default Page;
