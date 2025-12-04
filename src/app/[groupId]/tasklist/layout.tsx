import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "할 일 목록",
  description: "할 일을 확인할 수 있습니다.",
  robots: {
    index: false,
    follow: false,
  },
};

const Layout = ({
  children,
  task,
}: {
  children: ReactNode;
  task: ReactNode;
}) => {
  return (
    <div className="flex">
      <div className="flex min-h-screen w-full justify-center overflow-auto">
        {children}
      </div>
      {task}
    </div>
  );
};
export default Layout;
