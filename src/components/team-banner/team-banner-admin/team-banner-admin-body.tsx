import Progressbar from "@/components/progressbar/progressbar";
import cn from "@/utils/clsx";

interface TeamBannerAdminBodyProps {
  tasksTodo: number;
  tasksDone: number;
}

const TeamBannerAdminBody = ({
  tasksTodo,
  tasksDone,
}: TeamBannerAdminBodyProps) => {
  const progressRate =
    tasksTodo === 0 ? 0 : Math.round((tasksDone / tasksTodo) * 100);

  return (
    <div className="flex h-full w-full flex-col justify-between">
      <div className="flex justify-between">
        <div className={cn("h-[52px] w-[113px]", "tablet:h-[65px]")}>
          <div
            className={cn(
              "text-xs font-medium text-gray-700",
              "tablet:text-md"
            )}
          >
            오늘의 진행 상황
          </div>
          <div className="text-3xl font-bold text-blue-200 tablet:text-4xl">{`${progressRate}%`}</div>
        </div>
        <div
          className={cn(
            "mt-[6px] grid h-[46px] w-[126px] grid-cols-[1fr_auto_1fr] items-center justify-between",
            "mt-[9px] tablet:h-[56px] tablet:w-[142px]"
          )}
        >
          <div className="flex w-[58px] flex-col flex-center">
            <div className="mb-[4px] text-xs font-medium text-gray-700">
              오늘의 할일
            </div>
            <div className="text-2xl font-bold text-gray-800 tablet:text-3xl">
              {tasksTodo}
            </div>
          </div>

          <div className="h-0 w-[46px] -rotate-90 border-[1px] border-gray-300 tablet:w-[56px]"></div>

          <div className="flex w-[38px] flex-col flex-center">
            <div className="mb-[4px] text-xs font-medium text-gray-700">
              완료🙌
            </div>
            <div className="text-2xl font-bold text-blue-200 tablet:text-3xl">
              {tasksDone}
            </div>
          </div>
        </div>
      </div>

      <Progressbar progressRate={progressRate} />
    </div>
  );
};

export default TeamBannerAdminBody;
