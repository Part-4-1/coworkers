import React, { MouseEvent, MouseEventHandler } from "react";
import {
  Button,
  Checkbox,
  DeleteModalUI,
  Dropdown,
  Icon,
} from "@/components/index";
import cn from "@/utils/clsx";
import { toKoreanDateString } from "@/utils/date-util";
import { changeFrequencyCode } from "@/utils/util";
import usePatchTaskDone from "@/hooks/api/task/use-patch-task-done";
import usePrompt from "@/hooks/use-prompt";
import useDeleteTask from "@/hooks/api/task/use-delete-task";

interface ListProps {
  id: number;
  date: string;
  name: string;
  doneAt: string | null;
  description: string | null;
  commentCount?: number;
  frequency: string;
  groupId?: number;
  taskListId?: number;
  className?: string;
  onClickCheckbox?: MouseEventHandler<HTMLInputElement>;
}

const List = ({
  id,
  date,
  name,
  doneAt,
  description,
  commentCount,
  frequency,
  groupId = 0,
  taskListId = 0,
  className,
  onClickCheckbox,
}: ListProps) => {
  const repeatPeriod = changeFrequencyCode(frequency);
  const { mutate: patchTaskDone } = usePatchTaskDone(
    groupId,
    taskListId,
    new Date(date).toLocaleDateString("sv-SE")
  );
  const { mutate: deleteTask } = useDeleteTask(
    new Date(date).toLocaleDateString("sv-SE")
  );
  const { Modal: DeleteModal, openPrompt, closePrompt } = usePrompt();

  const handleClickCheckbox = (e: MouseEvent<HTMLInputElement>) => {
    const newDescription = description ?? "";
    patchTaskDone({
      groupId,
      taskListId,
      taskId: id,
      data: { name, description: newDescription, done: doneAt ? false : true },
    });
  };

  const handleClickDelete = () => {
    closePrompt();
    deleteTask({ groupId, taskListId, taskId: id });
  };

  return (
    <div
      className={cn(
        "mx-auto flex w-full flex-col gap-[10px] rounded-lg border border-gray-300 bg-white px-[14px] py-3",
        "pointer-events-none relative inset-0 z-10",
        className,
        doneAt && "bg-gray-50"
      )}
    >
      <div className="flex justify-between">
        <div className="pointer-events-auto gap-3 flex-center">
          <Checkbox
            id={id}
            isDone={doneAt}
            taskName={name}
            onClickCheckbox={handleClickCheckbox}
          />
          {!!commentCount && (
            <Button
              variant="none"
              className="flex items-center gap-[2px]"
              onClick={() => {}}
            >
              <Icon icon="comment" className="h-4 w-4 text-gray-800" />{" "}
              <span className="text-xs text-gray-800">{commentCount}</span>
            </Button>
          )}
        </div>
        <Button
          variant="none"
          className="pointer-events-auto"
          onClick={openPrompt}
        >
          <Icon icon="x" className="h-4 w-4 text-gray-800" />
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-[6px]">
          <Icon
            icon="calendar"
            className="ml-[2px] h-3 w-3 tablet:ml-1 tablet:h-4 tablet:w-4"
          />
          <span className="text-xs text-gray-800">
            {toKoreanDateString(date)}
          </span>
        </div>
        <>
          <span className="h-3 w-[1px] bg-blue-600" />
          <div className="flex items-center gap-[6px]">
            <Icon icon="repeat" className="h-3 w-3 tablet:h-4 tablet:w-4" />
            <span className="text-xs text-gray-800">{repeatPeriod}</span>
          </div>
        </>
      </div>
      <DeleteModal>
        <DeleteModalUI
          contents={
            <>
              '{name}'<br />할 일을 정말 삭제하시겠어요?
            </>
          }
          description="삭제 후에는 되돌릴 수 없습니다."
          handleClose={closePrompt}
          handleClick={handleClickDelete}
        />
      </DeleteModal>
    </div>
  );
};

export default List;
