import { ReactNode } from "react";

const Layout = ({
  children,
  task,
}: {
  children: ReactNode;
  task: ReactNode;
}) => {
  return (
    <div className="flex justify-between">
      {children}
      {task}
    </div>
  );
};
export default Layout;
