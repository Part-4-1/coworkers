import TaskChip from "@/components/task-chip/task-chip";
import { Group } from "@/types/group";
import { Dispatch, SetStateAction } from "react";

interface HistoryTaskChipListProps {
  groupData: Group | undefined;
  setTaskListId: Dispatch<SetStateAction<number>>;
}

const HistoryTaskChipList = ({
  groupData,
  setTaskListId,
}: HistoryTaskChipListProps) => {
  return (
    <ul className="flex items-center gap-1 overflow-x-auto">
      {groupData?.taskLists.map((taskList) => {
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
              count={taskList.tasks.length}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default HistoryTaskChipList;
