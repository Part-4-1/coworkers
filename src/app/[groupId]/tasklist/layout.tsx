import { ReactNode } from "react";

const Layout = ({
  children,
  task,
}: {
  children: ReactNode;
  task: ReactNode;
}) => {
  return (
    <div className="flex h-screen justify-between">
      <main className="overflow-auto">{children}</main>
      <aside className="relative flex w-full min-w-[375px] flex-col overflow-y-auto px-7 py-3 tablet:max-w-[520px] tablet:gap-4 tablet:pt-10 pc:max-w-[780px] pc:gap-5">
        {task}
      </aside>
    </div>
  );
};
export default Layout;
