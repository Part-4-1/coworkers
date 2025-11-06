import cn from "@/utils/clsx";
import { BadgeProps } from "../badge/badge";
import { Icon, Badge, Button } from "../index";

interface CheckboxProps {
  label?: string;
  isDone?: boolean;
}

interface TaskCardProps extends CheckboxProps, BadgeProps {
  taskTitle: string;
  task?: string;
}

const TaskCard = ({ taskTitle, task, total, completed }: TaskCardProps) => {
  return (
    <div
      className={cn(
        "flex min-h-[54px] min-w-[270px] flex-col justify-center rounded-xl border border-gray-300",
        "pl-5 pr-4"
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-md font-semibold">{taskTitle}</span>
        <div className="flex">
          <Badge total={total} completed={completed} />
          <Button variant="none">
            <Icon icon="kebab" className="h-6 w-6 text-gray-400" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const Checkbox = ({ label, isDone = false }: CheckboxProps) => {
  return (
    <label className="w-full gap-1 flex-center">
      <input type="checkbox" className="sr-only" />
      <Icon
        icon={isDone ? "checkboxActive" : "checkboxDefault"}
        className="h-[18px] w-[18px] cursor-pointer"
      />
      <p className="text-xs">{label}</p>
    </label>
  );
};

export default TaskCard;
