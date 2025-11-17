import cn from "@/utils/clsx";
import { BadgeProps } from "../badge/badge";
import Icon from "../icon/Icon";
import Badge from "../badge/badge";
import Button from "../button/button";
import Dropdown from "../dropdown-components/dropdown";
import Checkbox from "../checkbox/checkbox";
import { MouseEventHandler } from "react";
import { CheckboxProps } from "../checkbox/checkbox";

interface TaskCardProps extends BadgeProps {
  taskTitle: string;
  taskList?: CheckboxProps[];
  onClickCheckbox: MouseEventHandler<HTMLInputElement>;
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
        "gap-4 bg-white pl-5 pr-4",
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
              <li key={task.id} data-id={task.id}>
                <Checkbox
                  id={task.id}
                  taskName={task.taskName}
                  isDone={task.isDone}
                  size="sm"
                  onClickCheckbox={onClickCheckbox}
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default TaskCard;
