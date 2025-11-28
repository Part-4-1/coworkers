import { TaskItemSkeleton } from "@/components";
import List from "@/components/list/list";
import { Task, TasksDone } from "@/types/task";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TaskListItem = ({
  groupId,
  taskListId = 0,
  taskItems,
}: {
  groupId: number;
  taskListId?: number;
  taskItems: Task[] | TasksDone[] | undefined;
}) => {
  const pathname = usePathname();

  if (!taskItems) {
    return <TaskItemSkeleton />;
  }

  return (
    <ul className="flex flex-col gap-3 overflow-auto">
      {taskItems.length > 0 ? (
        taskItems.map((task) => {
          return (
            <li key={task.id} className="relative">
              <Link
                href={`${pathname}?list=${taskListId}&task=${task.id}`}
                className="absolute inset-0 z-0 hover:bg-gray-100"
              />
              <List {...{ ...task, groupId, taskListId }} />
            </li>
          );
        })
      ) : (
        <div className="h-[450px] flex-col-center">
          <Image
            src="/images/empty_task.png"
            width={250}
            height={125}
            alt="empty_task"
            quality={100}
            draggable={false}
            priority
          />
          <p className="text-center text-md text-gray-700">
            할 일이 없네요
            <br />
            조금 쉬어볼까요?
          </p>
        </div>
      )}
    </ul>
  );
};

export default TaskListItem;
