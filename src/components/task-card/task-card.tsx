import cn from "@/utils/clsx";
import { BadgeProps } from "../badge/badge";
import { Icon, Badge, Button } from "../index";
import { MouseEvent } from "react";

interface CheckboxProps {
  id: number;
  taskName: string;
  isDone?: string | null;
}

interface TaskCardProps extends BadgeProps {
  taskTitle: string;
  taskList?: CheckboxProps[];
  onClickCheckbox?: (e: MouseEvent<HTMLUListElement>) => void;
}

const TaskCard = ({
  taskTitle,
  taskList,
  total,
  completed,
  onClickCheckbox,
}: TaskCardProps) => {
  return (
    <div
      className={cn(
        "flex min-h-[54px] min-w-[270px] flex-col justify-center rounded-xl border border-gray-300",
        "pl-5 pr-4"
      )}
    >
      <div className="flex items-center justify-between">
        <span className="truncate text-md font-semibold">{taskTitle}</span>
        <div className="flex">
          <Badge total={total} completed={completed} />
          <Button variant="none">
            <Icon icon="kebab" className="h-6 w-6 text-gray-400" />
          </Button>
        </div>
      </div>
      {taskList && (
        <ul onClick={onClickCheckbox}>
          {taskList.map((task) => {
            return (
              <li key={task.id} data-id={task.id}>
                <Checkbox id={task.id} taskName={task.taskName} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

const Checkbox = ({ id, taskName, isDone = null }: CheckboxProps) => {
  return (
    <label htmlFor={id + ""} className="w-full gap-1 flex-center">
      <input
        id={id + ""}
        type="checkbox"
        className="sr-only"
        onClick={(e) => e.stopPropagation()}
      />
      <Icon
        icon={isDone ? "checkboxActive" : "checkboxDefault"}
        className="h-[18px] w-[18px] cursor-pointer"
      />
      <p className="truncate text-xs">{taskName}</p>
    </label>
  );
};

export default TaskCard;
