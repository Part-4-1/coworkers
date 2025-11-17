import { TaskList } from "@/types/taskList";
import cn from "@/utils/clsx";
import { Badge, Button, Dropdown, Icon, TaskCard } from "@/components";
import { MouseEventHandler } from "react";

interface TodoContainerProps {
  taskList: TaskList[];
}

const TaskListContainer = ({ taskList }: TodoContainerProps) => {
  return (
    <div
      className={cn(
        "mb-[22px] mt-6 flex w-full max-w-[1280px] flex-col justify-between gap-2 px-4",
        "tablet:mb-6 tablet:mt-[34px] tablet:gap-3 tablet:px-0",
        "pc:w-[270px] pc:gap-6"
      )}
    >
      <p className="text-xs font-semibold text-gray-800 tablet:text-lg pc:text-xl pc:font-bold pc:text-blue-700">
        할 일
      </p>

      <div className="flex items-center justify-between pc:flex-col pc:gap-[38px]">
        {/* mobile ~ tablet */}
        <div className="flex items-center justify-between pc:hidden">
          <Dropdown
            items={taskList.map((task) => {
              return {
                label: task.name,
                addon: <Badge total={task.tasks.length} completed={0} />,
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
        <div className="hidden pc:block">
          {taskList.map((task) => {
            return (
              <TaskCard
                key={task.id}
                taskTitle={task.name}
                total={task.tasks.length}
                completed={0}
              />
            );
          })}
        </div>
        <div className="flex pc:justify-center">
          <Button
            variant="outlined"
            className="h-10 w-fit rounded-[40px] bg-white py-[14px] pl-4 pr-5 text-md font-semibold"
          >
            <Icon icon="plus" className="h-4 w-4" />할 일 추가
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TaskListContainer;
