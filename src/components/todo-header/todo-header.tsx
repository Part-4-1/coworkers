import { ReactNode } from "react";
import Button from "../button/button";
import Icon from "../icon/Icon";

interface TodoHeaderProps {
  children: ReactNode;
}

const TodoHeader = ({ children }: TodoHeaderProps) => {
  return (
    <div className="flex h-[38px] w-full items-center rounded-xl bg-gray-300 pl-5 pr-2">
      <span className="text-md font-medium">{children}</span>
      <Button variant="none">
        <Icon icon="plus" width={16} height={16} />
      </Button>
    </div>
  );
};

export default TodoHeader;
