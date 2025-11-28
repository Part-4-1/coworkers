import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "마이 히스토리",
  description: "마이 히스토리",
};

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen w-full justify-center overflow-hidden">
      {children}
    </div>
  );
};
export default Layout;
