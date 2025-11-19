import TaskChip from "@/components/task-chip/task-chip";
import { Group } from "@/types/group";

interface HistoryTaskChipListProps {
  groupData: Group | undefined;
}

const HistoryTaskChipList = ({ groupData }: HistoryTaskChipListProps) => {
  return (
    <ul className="flex items-center gap-1 overflow-x-auto">
      {groupData?.taskLists.map((taskList) => {
        return (
          <li key={taskList.id} className="shrink-0 pc:w-fit">
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
