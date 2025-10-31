import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="min-h-screen bg-[#444444]">{children}</div>;
};
export default Layout;
