import { Button, Icon } from "@/components";
import { ReactNode } from "react";

const TaskDetailWrapper = ({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose: () => void;
}) => {
  return (
    <div className="bg-white">
      <div className="flex flex-col gap-5 tablet:gap-[15px] pc:gap-[74px]">
        <Button variant="none" onClick={onClose}>
          <Icon icon="x" className="h-6 w-6" />
        </Button>
        {children}
      </div>
    </div>
  );
};

export default TaskDetailWrapper;
