import { ReactNode } from "react";

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
