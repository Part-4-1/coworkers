import List from "@/components/list/list";
import { Task } from "@/types/task";
import { MouseEvent } from "react";

interface TaskListItemProps {
  name: string;
  createdAt: string;
  commentCount: number;
  frequency: string;
  doneAt: string | null;
}

const TaskListItem = ({ taskItems }: { taskItems: Task[] }) => {
  const handleClickCheckbox = (e: MouseEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.id);
  };

  return (
    <ul className="flex flex-col gap-3 overflow-auto">
      {taskItems.map((task) => {
        return (
          <li key={task.id}>
            <List {...task} onClickCheckbox={handleClickCheckbox} />
          </li>
        );
      })}
    </ul>
  );
};

export default TaskListItem;
