"use client";

import { AddTaskListModalUI, Badge, Icon } from "@/components";
import { TASK_LIST_COLORS } from "@/constants/task-list-color";
import usePrompt from "@/hooks/use-prompt";

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
}

const TeamBody = ({ taskLists }: TeamBodyProps) => {
  const sortedTaskLists = [...taskLists].sort(
    (a, b) => a.displayIndex - b.displayIndex
  );
  const isTaskListsEmpty = taskLists.length === 0 || taskLists === null;
  const { Modal, openPrompt, closePrompt } = usePrompt(true);

  const handleAddTaskList = (name: string) => {
    closePrompt();
    //TODO: API 호출 및 로직 추가
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
            onClick={openPrompt}
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
                    className="flex h-[40px] w-full items-center justify-between overflow-hidden rounded-[12px] bg-white"
                  >
                    <div className="flex min-w-0 flex-1 gap-[12px] flex-center">
                      <div
                        className={` ${color} rounded-[12px]] -ml-[12px] h-[40px] w-[24px]`}
                      ></div>
                      <div className="min-w-0 flex-1 truncate text-md font-medium text-blue-700">
                        {taskList.name}
                      </div>
                    </div>
                    <div className="flex gap-[4px] flex-center">
                      <div>
                        <Badge total={totalTasks} completed={doneTasks} />
                      </div>
                      <div>
                        <Icon
                          icon="kebab"
                          className="h-[20px] w-[20px] cursor-pointer text-gray-400"
                        />
                      </div>
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
    </div>
  );
};

export default TeamBody;
