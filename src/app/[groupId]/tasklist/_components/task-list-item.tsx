import List from "@/components/list/list";
import { Task } from "@/types/task";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEvent, useEffect } from "react";

const TaskListItem = ({ taskItems }: { taskItems: Task[] }) => {
  const pathname = usePathname();
  const handleClickCheckbox = (e: MouseEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.id);
  };

  useEffect(() => {}, []);

  return (
    <ul className="flex flex-col gap-3 overflow-auto">
      {taskItems &&
        taskItems.map((task) => {
          return (
            <li key={task.id}>
              <Link href={`${pathname}?task=${task.id}`}>
                <List {...task} onClickCheckbox={handleClickCheckbox} />
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default TaskListItem;
