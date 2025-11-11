import { Button, Icon } from "@/components";
import cn from "@/utils/clsx";
import { ReactNode } from "react";

const TaskDetailWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={cn(
        "flex w-full min-w-[375px] flex-col gap-5 px-7 pt-3",
        "tablet:max-w-[520px] tablet:gap-4 tablet:pt-10",
        "pc:max-w-[780px] pc:gap-5"
      )}
    >
      <div className="flex flex-col gap-5 tablet:gap-[15px] pc:gap-[74px]">
        <Button variant="none">
          <Icon icon="x" className="h-6 w-6" />
        </Button>
        {children}
      </div>
    </div>
  );
};

export default TaskDetailWrapper;
