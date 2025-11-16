import { Icon } from "@/components";
import cn from "@/utils/clsx";

interface BodyPcTaskSectionProps {
  taskCount: number;
}

const BodyPcTaskSection = ({ taskCount }: BodyPcTaskSectionProps) => {
  return (
    <div>
      <div className="mb-[36px]">
        <span className="mr-[8px] text-lg font-medium text-blue-700">
          할 일 목록
        </span>
        <span className="text-lg font-normal text-gray-800">
          ({taskCount}개)
        </span>
      </div>
      <div className="flex gap-[16px] flex-center">
        <section className="flex flex-col">
          <div
            className={cn(
              "flex h-[38px] w-[270px] justify-between rounded-[12px] bg-gray-300",
              "items-center pl-[20px] pr-[8px] text-md font-medium text-blue-700"
            )}
          >
            할 일
            <div className="h-[24px] w-[24px] cursor-pointer rounded-[8px] border-[1px] border-gray-400 bg-white flex-center">
              <Icon
                icon="plus"
                className={cn("h-[16px] w-[16px]", "text-gray-700")}
              />
            </div>
          </div>
        </section>
        <section className="flex flex-col">
          <div
            className={cn(
              "flex h-[38px] w-[270px] justify-between rounded-[12px] bg-gray-300",
              "items-center pl-[20px] pr-[8px] text-md font-medium text-blue-700"
            )}
          >
            진행중
            <div className="h-[24px] w-[24px] cursor-pointer rounded-[8px] border-[1px] border-gray-400 bg-white flex-center">
              <Icon
                icon="plus"
                className={cn("h-[16px] w-[16px]", "text-gray-700")}
              />
            </div>
          </div>
        </section>
        <section className="flex flex-col">
          <div
            className={cn(
              "flex h-[38px] w-[270px] justify-between rounded-[12px] bg-gray-300",
              "items-center pl-[20px] pr-[8px] text-md font-medium text-blue-700"
            )}
          >
            완료
            <div className="h-[24px] w-[24px] cursor-pointer rounded-[8px] border-[1px] border-gray-400 bg-white flex-center">
              <Icon
                icon="plus"
                className={cn("h-[16px] w-[16px]", "text-gray-700")}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BodyPcTaskSection;
