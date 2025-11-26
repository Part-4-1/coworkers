"use client";

import ChangeTaskListModalUI from "@/components/modal-ui/change-task-list-modal-ui";
import useDeleteTaskList from "@/hooks/api/task/use-delete-task-list";
import usePatchTaskList from "@/hooks/api/task/use-patch-task-list";
import usePrompt from "@/hooks/use-prompt";
import cn from "@/utils/clsx";
import { MouseEventHandler } from "react";
import Badge, { BadgeProps } from "../badge/badge";
import Button from "../button/button";
import Checkbox, { CheckboxProps } from "../checkbox/checkbox";
import Dropdown from "../dropdown-components/dropdown";
import Icon from "../icon/Icon";
import DeleteModalUI from "../modal-ui/delete-modal-ui";

interface TaskCardProps extends BadgeProps {
  groupId: number;
  taskListId: number;
  pageListId: number;
  taskTitle: string;
  taskList?: CheckboxProps[];
  handleClickCheckbox?: MouseEventHandler<HTMLInputElement>;
}

const TaskCard = ({
  groupId,
  taskListId,
  pageListId,
  taskTitle,
  taskList,
  total,
  completed,
  handleClickCheckbox,
}: TaskCardProps) => {
  const {
    Modal: DeleteModal,
    openPrompt: openDeleteModal,
    closePrompt: closeDeleteModal,
  } = usePrompt();
  const {
    Modal: ChangeModal,
    openPrompt: openChangeModal,
    closePrompt: closeChangeModal,
  } = usePrompt(true);

  const { mutate: deleteTaskList, isPending } = useDeleteTaskList(groupId);
  const handleDelete = () => {
    deleteTaskList({ groupId, taskListId });
    closeDeleteModal();
  };

  const { mutate: patchTaskList, isPending: patchPending } =
    usePatchTaskList(groupId);
  const handlePatch = (name: string) => {
    patchTaskList({ groupId, taskListId, name });
    closeChangeModal();
  };

  return (
    <div
      className={cn(
        "flex h-[54px] w-[270px] flex-col justify-center rounded-xl border border-gray-300",
        "pointer-events-none relative inset-0 gap-4 bg-white pl-5 pr-4",
        taskList && "pb-6 pt-4"
      )}
    >
      <div className="flex items-center justify-between">
        <p
          className={cn(
            "w-[150px] cursor-pointer truncate text-md font-semibold"
          )}
        >
          {taskTitle}
        </p>
        <div className="flex" onClick={(e) => e.stopPropagation()}>
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
            className="pointer-events-auto"
            menuAlign="start"
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
      <DeleteModal>
        <DeleteModalUI
          contents={
            <>
              '{taskTitle}'
              <br />할 일을 정말 삭제하시겠어요?
            </>
          }
          description="삭제 후에는 되돌릴 수 없습니다."
          handleClick={handleDelete}
          handleClose={closeDeleteModal}
        />
      </DeleteModal>
      <ChangeModal>
        <ChangeTaskListModalUI
          taskTitle={taskTitle}
          handleClick={handlePatch}
        />
      </ChangeModal>
    </div>
  );
};

export default TaskCard;
