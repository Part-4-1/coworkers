import List from "@/components/list/list";
import { MonthlyTaskList } from "@/types/task";
import { formatDateWithDay } from "@/utils/date-util";
import Image from "next/image";

const HistoryList = ({
  monthlyTaskList,
}: {
  monthlyTaskList: MonthlyTaskList[];
}) => {
  if (!monthlyTaskList.length) {
    return (
      <div className="h-full flex-col-center">
        <Image
          src={"/images/empty_my_history.png"}
          alt="empty_my_history"
          width={350}
          height={150}
          priority
          quality={100}
          className="object-contain"
        />
        <p className="text-center text-md text-gray-700">
          아직 완료된 할 일이 없습니다.
        </p>
      </div>
    );
  }

  return (
    <ul className="h-full overflow-y-auto">
      {[...monthlyTaskList].reverse().map((taskList) => {
        return (
          <li key={taskList.date} className="flex flex-col gap-3 pb-10">
            <div className="flex items-center gap-5">
              <hr className="h-px w-full border border-gray-300" />
              <p className="w-fit whitespace-nowrap text-center text-md text-gray-800 tablet:text-lg tablet:font-medium">
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
