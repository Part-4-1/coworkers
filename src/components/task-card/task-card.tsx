import cn from "@/utils/clsx";
import { BadgeProps } from "../badge/badge";
import { Icon, Badge, Button, Dropdown } from "../index";
import { MouseEvent } from "react";

interface CheckboxProps {
  id: number;
  taskName: string;
  isDone?: string | null;
}

interface TaskCardProps extends BadgeProps {
  taskTitle: string;
  taskList?: CheckboxProps[];
  onClickCheckbox?: (e: MouseEvent<HTMLLIElement>) => void;
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
        "flex min-h-[54px] w-[270px] flex-col justify-center rounded-xl border border-gray-300",
        "gap-4 pl-5 pr-4",
        taskList && "pb-6 pt-4"
      )}
    >
      <div className="flex items-center justify-between">
        <span className="truncate text-md font-semibold">{taskTitle}</span>
        <div className="flex">
          <Badge total={total} completed={completed} />
          <Dropdown
            trigger={
              <Button variant="none">
                <Icon icon="kebab" className="h-6 w-6 text-gray-400" />
              </Button>
            }
            items={[{ label: "수정하기" }, { label: "삭제하기" }]}
          />
        </div>
      </div>
      {taskList && (
        <ul className="flex flex-col justify-start gap-2">
          {taskList.map((task) => {
            return (
              <li key={task.id} data-id={task.id} onClick={onClickCheckbox}>
                <Checkbox
                  id={task.id}
                  taskName={task.taskName}
                  isDone={task.isDone}
                />
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
    <label
      htmlFor={id + ""}
      className="flex w-full cursor-pointer items-center gap-1"
    >
      <input
        id={id + ""}
        type="checkbox"
        className="sr-only"
        onClick={(e) => e.stopPropagation()}
      />
      <Icon
        icon={isDone ? "checkboxActive" : "checkboxDefault"}
        className="h-[18px] w-[18px] shrink-0 cursor-pointer"
      />
      <p
        className={cn(
          "truncate text-xs",
          isDone && "text-gray-700 line-through"
        )}
      >
        {taskName}
      </p>
    </label>
  );
};

export default TaskCard;
