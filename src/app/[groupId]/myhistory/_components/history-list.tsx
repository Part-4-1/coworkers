import List from "@/components/list/list";
import { MonthlyTaskList } from "@/types/task";
import { formatDateWithDay } from "@/utils/date-util";

const HistoryList = ({
  monthlyTaskList,
}: {
  monthlyTaskList: MonthlyTaskList[];
}) => {
  return (
    <ul>
      {monthlyTaskList.map((taskList) => {
        return (
          <li key={taskList.date} className="flex flex-col gap-3 pb-10">
            <div className="flex items-center gap-5">
              <hr className="h-px w-full border border-gray-300" />
              <p className="w-full whitespace-nowrap text-center text-md text-gray-800">
                {formatDateWithDay(taskList.date)}
              </p>
              <hr className="h-px w-full border border-gray-300" />
            </div>
            {taskList.tasks.map((task) => {
              return <List key={task.id} {...task} />;
            })}
          </li>
        );
      })}
    </ul>
  );
};

export default HistoryList;
