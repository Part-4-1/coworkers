"use client";

import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full justify-center overflow-auto">
      {children}
    </div>
  );
};
export default Layout;
