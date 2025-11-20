"use client";

import { AddTaskListModalUI, ChangeTaskListModalUI } from "@/components";
import usePatchTaskList from "@/hooks/api/task/use-patch-task-list";
import usePostTaskList from "@/hooks/api/task/use-post-task-list";
import usePrompt from "@/hooks/use-prompt";
import { useRouter } from "next/navigation";
import { useState } from "react";
import TaskListSection from "./task-lists-section";

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
  refetchGroup: () => void;
}

const TeamBody = ({ taskLists, groupId, refetchGroup }: TeamBodyProps) => {
  const router = useRouter();
  const sortedTaskLists = [...taskLists].sort(
    (a, b) => a.displayIndex - b.displayIndex
  );

  const { Modal, openPrompt, closePrompt } = usePrompt(true);

  const { mutate: postTaskList } = usePostTaskList(groupId);
  const { mutate: patchTaskList } = usePatchTaskList(groupId);

  const [modalType, setModalType] = useState<"add" | "edit" | null>(null);
  const [selectedTaskList, setSelectedTaskList] = useState<TaskList | null>(
    null
  );

  const handleAddTaskList = (name: string) => {
    closePrompt();
    postTaskList(
      { groupId, name },
      {
        onSuccess: () => refetchGroup(),
      }
    );
  };

  const handleChangeTaskList = (taskListId: number, newName: string) => {
    closePrompt();
    patchTaskList(
      { groupId, taskListId, name: newName },
      {
        onSuccess: () => refetchGroup(),
      }
    );
  };

  const handleClickTask = (taskListId: number) => {
    router.push(`/${groupId}/tasklist?list=${taskListId}`);
  };

  const handleOpenEditModal = (taskList: TaskList) => {
    setModalType("edit");
    setSelectedTaskList(taskList);
    openPrompt();
  };

  return (
    <div className="px-[16px] tablet:px-[0px] pc:px-[0px]">
      <div className="mb-[28px] mt-[32px] border-[1px] border-gray-300"></div>

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
              setModalType("add");
              setSelectedTaskList(null);
              openPrompt();
            }}
          >
            + 새로운 목록 추가하기
          </div>
        </header>
        <TaskListSection
          taskLists={sortedTaskLists}
          onClickTask={handleClickTask}
          onClickEdit={handleOpenEditModal}
        />
      </div>

      <Modal>
        {modalType === "add" && (
          <AddTaskListModalUI handleClick={handleAddTaskList} />
        )}
        {modalType === "edit" && selectedTaskList && (
          <ChangeTaskListModalUI
            taskTitle={selectedTaskList.name}
            handleClick={(newName) =>
              handleChangeTaskList(selectedTaskList.id, newName)
            }
          />
        )}
      </Modal>
    </div>
  );
};

export default TeamBody;
