"use client";

import cn from "@/utils/clsx";
import { BadgeProps } from "../badge/badge";
import Icon from "../icon/Icon";
import Badge from "../badge/badge";
import Button from "../button/button";
import Dropdown from "../dropdown-components/dropdown";
import Checkbox from "../checkbox/checkbox";
import { MouseEventHandler } from "react";
import { CheckboxProps } from "../checkbox/checkbox";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import usePrompt from "@/hooks/use-prompt";
import ChangeTaskListModalUI from "@/app/[groupId]/tasklist/_components/change-task-list-modal-ui";

interface TaskCardProps extends BadgeProps {
  taskListId: number;
  taskTitle: string;
  taskList?: CheckboxProps[];
  handleClickCheckbox?: MouseEventHandler<HTMLInputElement>;
}

const TaskCard = ({
  taskListId,
  taskTitle,
  taskList,
  total,
  completed,
  handleClickCheckbox,
}: TaskCardProps) => {
  const listId = useSearchParams().get("list");
  const pathName = usePathname();
  const {
    Modal: DeleteModal,
    openPrompt: openDeleteModal,
    closePrompt: closeDeleteModal,
  } = usePrompt(true);
  const {
    Modal: ChangeModal,
    openPrompt: openChangeModal,
    closePrompt: closeChangeModal,
  } = usePrompt(true);

  return (
    <div
      className={cn(
        "flex min-h-[54px] min-w-[270px] flex-col justify-center rounded-xl border border-gray-300",
        "gap-4 bg-white pl-5 pr-4",
        taskList && "pb-6 pt-4"
      )}
    >
      <div className="flex items-center justify-between">
        <Link href={`${pathName}?list=${taskListId}`}>
          <span
            className={`cursor-pointer truncate text-md font-semibold ${taskListId.toString() === listId && "rounded-xl text-blue-200"}`}
          >
            {taskTitle}
          </span>
        </Link>
        <div className="flex">
          <Badge total={total} completed={completed} />
          <Dropdown
            trigger={
              <Button variant="none">
                <Icon icon="kebab" className="h-6 w-6 text-gray-400" />
              </Button>
            }
            items={[
              { label: "수정하기", onClick: openChangeModal },
              { label: "삭제하기", onClick: openDeleteModal },
            ]}
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
                  onClickCheckbox={handleClickCheckbox}
                />
              </li>
            );
          })}
        </ul>
      )}
      <DeleteModal>""</DeleteModal>
      <ChangeModal>
        <ChangeTaskListModalUI taskTitle={taskTitle} handleClick={() => {}} />
      </ChangeModal>
    </div>
  );
};

export default TaskCard;
