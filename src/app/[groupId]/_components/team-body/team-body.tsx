"use client";

import {
  AddTaskListModalUI,
  Badge,
  Button,
  ChangeTaskListModalUI,
  Dropdown,
  Icon,
} from "@/components";
import { TASK_LIST_COLORS } from "@/constants/task-list-color";
import usePatchTaskList from "@/hooks/api/task/use-patch-task-list";
import usePostTaskList from "@/hooks/api/task/use-post-task-list";
import usePrompt from "@/hooks/use-prompt";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
  const isTaskListsEmpty = taskLists.length === 0;
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
        {
          <div className="flex flex-col gap-[16px]">
            {isTaskListsEmpty ? (
              <div className="flex h-[100px] text-md text-gray-800 flex-center">
                아직 할 일 목록이 없습니다.
              </div>
            ) : (
              sortedTaskLists.map((taskList, index) => {
                const color = TASK_LIST_COLORS[index % TASK_LIST_COLORS.length];
                const totalTasks = taskList.tasks.length;
                const doneTasks = taskList.tasks.filter((t) => t.doneAt).length;

                return (
                  <div
                    key={taskList.id}
                    className="flex h-[40px] w-full items-stretch rounded-[12px] bg-white"
                  >
                    <div className="flex h-full min-w-0 flex-1 overflow-hidden rounded-l-[12px]">
                      <Button
                        variant="none"
                        className="flex h-full w-full items-center gap-[12px] text-start"
                        onClick={() =>
                          router.push(
                            `/${groupId}/tasklist?list=${taskList.id}`
                          )
                        }
                      >
                        <div
                          className={`${color} -ml-[12px] h-[40px] w-[24px] shrink-0`}
                        />
                        <div className="min-w-0 flex-1 truncate text-md font-medium text-blue-700">
                          {taskList.name}
                        </div>
                      </Button>
                    </div>
                    <div className="flex items-center gap-[4px] pr-[12px]">
                      <Badge total={totalTasks} completed={doneTasks} />
                      <Dropdown
                        trigger={
                          <Icon
                            icon="kebab"
                            className="h-[20px] w-[20px] cursor-pointer text-gray-400"
                          />
                        }
                        items={[
                          {
                            label: "수정하기",
                            onClick: () => {
                              setModalType("edit");
                              setSelectedTaskList(taskList);
                              openPrompt();
                            },
                          },
                          { label: "삭제하기" },
                        ]}
                      />
                    </div>
                  </div>
                );
              })
            )}
          </div>
        }
      </div>

      <Modal>
        <AddTaskListModalUI handleClick={handleAddTaskList} />
      </Modal>
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
