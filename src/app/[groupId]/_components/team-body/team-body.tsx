"use client";

import {
  AddTaskListModalUI,
  ChangeTaskListModalUI,
  DeleteModalUI,
} from "@/components";
import useDeleteTaskList from "@/hooks/api/task/use-delete-task-list";
import usePatchTaskList from "@/hooks/api/task/use-patch-task-list";
import usePostTaskList from "@/hooks/api/task/use-post-task-list";
import usePrompt from "@/hooks/use-prompt";
import useToast from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import TaskListsSection from "./task-lists-section";

interface Task {
  id: number;
  name: string;
  doneAt: string | null;
}

interface TaskList {
  id: number;
  name: string;
  displayIndex: number;
  tasks: Task[];
}

interface TeamBodyProps {
  taskLists: TaskList[];
  groupId: number;
}

const TeamBody = ({ taskLists, groupId }: TeamBodyProps) => {
  const router = useRouter();

  const sortedTaskLists = [...taskLists].sort(
    (a, b) => a.displayIndex - b.displayIndex
  );

  const { mutate: postTaskList, isPending: isPostPending } = usePostTaskList();
  const { mutate: patchTaskList, isPending: isPatchPending } =
    usePatchTaskList(groupId);
  const { mutate: deleteTaskList } = useDeleteTaskList(groupId);
  const { success, error, warning } = useToast();

  const [selectedTaskList, setSelectedTaskList] = useState<TaskList | null>(
    null
  );

  const {
    Modal: AddModal,
    openPrompt: openAddModal,
    closePrompt: closeAddModal,
  } = usePrompt(true);

  const {
    Modal: ChangeModal,
    openPrompt: openChangeModal,
    closePrompt: closeChangeModal,
  } = usePrompt(true);

  const {
    Modal: DeleteModal,
    openPrompt: openDeleteModal,
    closePrompt: closeDeleteModal,
  } = usePrompt();

  const handleAddTaskList = (name: string) => {
    postTaskList(
      { groupId, name },
      {
        onSuccess: () => {
          success("할 일을 추가했습니다. ");
          closeAddModal();
        },
        onError: (err: any) => {
          const msg = err.response.data.message ?? "할 일 추가에 실패했습니다.";
          error(msg);
        },
      }
    );
  };

  const handlePatchTaskList = (newName: string) => {
    if (!selectedTaskList) return;

    patchTaskList(
      { groupId, taskListId: selectedTaskList.id, name: newName },
      {
        onSuccess: () => {
          closeChangeModal();
        },
        onError: (err: any) => {
          const msg =
            err.response.data.message ?? "할 일 목록 수정에 실패했습니다.";
          error(msg);
        },
      }
    );
  };

  const handleClickTask = (taskListId: number) => {
    router.push(`/${groupId}/tasklist?list=${taskListId}`);
  };

  const handleOpenEditModal = (taskList: TaskList) => {
    setSelectedTaskList(taskList);
    openChangeModal();
  };

  const handleOpenDeleteModal = (taskList: TaskList) => {
    setSelectedTaskList(taskList);
    openDeleteModal();
  };

  const handleDeleteTaskList = () => {
    if (!selectedTaskList) return;

    deleteTaskList(
      { groupId, taskListId: selectedTaskList.id },
      {
        onSuccess: () => {
          success("할 일을 삭제했습니다.");
          closeDeleteModal();
        },
        onError: () => {
          error("할 일 삭제에 실패했습니다");
        },
      }
    );
  };

  return (
    <div className="px-[16px] tablet:px-[0px] pc:px-[0px]">
      <div className="mb-[28px] mt-[32px] border-[1px] border-gray-300" />

      <div className="flex flex-col gap-[16px]">
        <header className="flex items-center justify-between">
          <div>
            <span className="mr-[8px] text-lg font-medium text-blue-700">
              할 일 목록
            </span>
            <span className="text-lg text-gray-800">
              ({sortedTaskLists.length}개)
            </span>
          </div>

          <div
            className="cursor-pointer text-md text-blue-200"
            onClick={() => {
              openAddModal();
            }}
          >
            + 새로운 목록 추가하기
          </div>
        </header>

        <TaskListsSection
          taskLists={sortedTaskLists}
          onClickTask={handleClickTask}
          onClickEdit={handleOpenEditModal}
          onClickDelete={handleOpenDeleteModal}
        />
      </div>

      <AddModal>
        <AddTaskListModalUI
          handleClick={handleAddTaskList}
          isPending={isPostPending}
        />
      </AddModal>

      <ChangeModal>
        {selectedTaskList && (
          <ChangeTaskListModalUI
            taskTitle={selectedTaskList.name}
            handleClick={handlePatchTaskList}
            isPending={isPatchPending}
          />
        )}
      </ChangeModal>
      <DeleteModal>
        <DeleteModalUI
          contents={
            <>
              '{selectedTaskList?.name}'
              <br />할 일 목록을 정말 삭제하시겠어요?
            </>
          }
          description="삭제 후에는 되돌릴 수 없습니다."
          handleClick={handleDeleteTaskList}
          handleClose={closeDeleteModal}
        />
      </DeleteModal>
    </div>
  );
};

export default TeamBody;
