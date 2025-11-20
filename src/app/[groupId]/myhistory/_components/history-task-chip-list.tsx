import TaskChip from "@/components/task-chip/task-chip";
import useGetTaskItems from "@/hooks/api/task/use-get-task-items";
import { Group } from "@/types/group";
import { Dispatch, SetStateAction } from "react";

interface HistoryTaskChipListProps {
  groupData: Group | undefined;
  selectedDate: Date | null;
  groupId: number;
  taskListId: number;
  setTaskListId: Dispatch<SetStateAction<number>>;
}

const HistoryTaskChipList = ({
  groupData,
  selectedDate,
  groupId,
  taskListId,
  setTaskListId,
}: HistoryTaskChipListProps) => {
  return (
    <ul className="flex items-center gap-1 overflow-x-auto">
      {groupData?.taskLists.map((taskList, idx) => {
        return (
          <li
            key={taskList.id}
            className="shrink-0 pc:w-fit"
            onClick={() => setTaskListId(taskList.id)}
          >
            <TaskChip
              id={taskList.id.toString()}
              radioName={"completed-task"}
              taskName={taskList.name}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default HistoryTaskChipList;
