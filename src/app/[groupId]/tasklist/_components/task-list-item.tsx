import List from "@/components/list/list";
import { Task, TasksDone } from "@/types/task";
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

  return (
    <ul className="flex flex-col gap-3 overflow-auto">
      {taskItems &&
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
        })}
    </ul>
  );
};

export default TaskListItem;
