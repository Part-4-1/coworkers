"use client";

import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen w-full justify-center overflow-hidden">
      {children}
    </div>
  );
};
export default Layout;
