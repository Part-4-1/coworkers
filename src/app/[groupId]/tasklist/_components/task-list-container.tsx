import { TaskList } from "@/types/taskList";
import cn from "@/utils/clsx";
import {
  Badge,
  Button,
  Dropdown,
  Icon,
  TaskCard,
  AddTaskListModalUI,
} from "@/components";
import usePostTaskList from "@/hooks/api/task/use-post-task-list";
import usePrompt from "@/hooks/use-prompt";
import { countDoneTask } from "@/utils/util";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import Link from "next/link";

interface TodoContainerProps {
  groupId: number;
  taskListId: number;
  taskList: TaskList[];
  isPending: boolean;
}

const TaskListContainer = ({
  groupId,
  taskListId,
  taskList,
  isPending,
}: TodoContainerProps) => {
  const pathName = usePathname();
  const { mutate: createTaskList, isPending: isPostPending } =
    usePostTaskList();
  const { Modal: AddTaskListModal, openPrompt, closePrompt } = usePrompt(true);
  const router = useRouter();
  const handleClick = (name: string) => {
    closePrompt();
    createTaskList({ groupId: groupId, name: name });
  };

  const [optimisticTaskListId, setOptimisticTaskListId] = useState(taskListId);

  useEffect(() => {
    setOptimisticTaskListId(taskListId);
  }, [taskListId]);

  return (
    <div
      className={cn(
        "flex w-full max-w-[1280px] flex-col justify-between gap-2 px-4",
        "tablet:gap-3 tablet:px-0",
        "pc:w-[270px] pc:justify-start pc:gap-6"
      )}
    >
      <div className="flex items-center justify-between pc:w-[270px]">
        <p className="text-xs font-semibold text-gray-800 tablet:text-lg pc:text-xl pc:font-bold pc:text-blue-700">
          할 일
        </p>
        <Button
          variant="outlined"
          className="h-10 w-fit rounded-[40px] bg-white py-[14px] pl-4 pr-5 text-md font-semibold mobile:hidden pc:flex"
          onClick={openPrompt}
          disabled={isPending}
        >
          <Icon icon="plus" className="h-4 w-4" />
          목록 추가
        </Button>
      </div>

      <div className="flex items-center justify-between pc:flex-col pc:gap-[38px]">
        {/* mobile ~ tablet */}
        <div className="flex items-center justify-between pc:hidden">
          <Dropdown
            items={taskList.map((task) => {
              return {
                label: task.name,
                onClick: () => {
                  router.push(`/${groupId}/tasklist?list=${task.id}`);
                },
                addon: (
                  <Badge
                    total={task.tasks.length}
                    completed={countDoneTask(task.tasks)}
                  />
                ),
              };
            })}
            isWidthFull
            defaultTriggerClassName={cn(
              "w-[180px] h-[44px] font-semibold text-sm text-blue-700 pl-4 pr-3 rounded-xl",
              "tablet:w-[240px]"
            )}
          />
        </div>
        {/* pc */}
        <ul className="hidden pc:flex pc:flex-col pc:gap-1">
          {!isPending ? (
            taskList.map((task) => {
              return (
                <li
                  key={task.id}
                  className={cn(
                    "relative",
                    task.id === optimisticTaskListId
                      ? "text-blue-200"
                      : "text-blue-700"
                  )}
                  onClick={() => setOptimisticTaskListId(task.id)}
                >
                  <Link
                    href={`${pathName}?list=${task.id}`}
                    scroll={false}
                    className="absolute inset-0 z-0"
                  />

                  <TaskCard
                    groupId={groupId}
                    taskListId={task.id}
                    pageListId={taskListId}
                    taskTitle={task.name}
                    total={task.tasks.length}
                    completed={countDoneTask(task.tasks)}
                  />
                </li>
              );
            })
          ) : (
            <Skeleton
              count={3}
              height={54}
              width={270}
              containerClassName="flex-1"
            />
          )}
        </ul>
        <div className="flex pc:hidden">
          <Button
            variant="outlined"
            className="h-10 w-fit rounded-[40px] bg-white py-[14px] pl-4 pr-5 text-md font-semibold"
            onClick={openPrompt}
            disabled={isPending}
          >
            <Icon icon="plus" className="h-4 w-4" />
            목록 추가
          </Button>
        </div>
      </div>
      <AddTaskListModal>
        <AddTaskListModalUI handleClick={handleClick} />
      </AddTaskListModal>
    </div>
  );
};

export default TaskListContainer;
