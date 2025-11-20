import { Badge, Button, Dropdown, Icon } from "@/components";
import { TASK_LIST_COLORS } from "@/constants/task-list-color";

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

interface TaskListsSectionProps {
  taskLists: TaskList[];
  onClickTask: (taskListId: number) => void;
  onClickEdit: (taskList: TaskList) => void;
  onClickDelete: (taskList: TaskList) => void;
}

const TaskListsSection = ({
  taskLists,
  onClickTask,
  onClickEdit,
  onClickDelete,
}: TaskListsSectionProps) => {
  const isEmpty = taskLists.length === 0;

  if (isEmpty) {
    return (
      <div className="flex h-[100px] text-md text-gray-800 flex-center">
        아직 할 일 목록이 없습니다.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[16px]">
      {taskLists.map((taskList, index) => {
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
                onClick={() => onClickTask(taskList.id)}
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
                    onClick: () => onClickEdit(taskList),
                  },
                  { label: "삭제하기", onClick: () => onClickDelete(taskList) },
                ]}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskListsSection;
