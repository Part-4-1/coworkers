"use client";

import { useSearchParams } from "next/navigation";
import { ReactNode } from "react";

const Layout = ({
  children,
  task,
}: {
  children: ReactNode;
  task: ReactNode;
}) => {
  const param = useSearchParams();
  const taskId = param.get("task");

  return (
    <div className="h-screen">
      <div className="flex justify-center">{children}</div>
      {taskId && (
        <aside className="relative left-0 flex w-full min-w-[375px] flex-col overflow-y-auto px-7 py-3 tablet:max-w-[520px] tablet:gap-4 tablet:pt-10 pc:max-w-[780px] pc:gap-5">
          {task}
        </aside>
      )}
    </div>
  );
};
export default Layout;
