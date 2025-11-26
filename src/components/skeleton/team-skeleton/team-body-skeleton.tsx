import Skeleton from "react-loading-skeleton";

const TeamBodySkeleton = () => {
  return (
    <div className="px-[16px] tablet:px-[0px] pc:px-[0px]">
      <div className="mb-[28px] mt-[32px] border-[1px] border-gray-300" />

      <div className="flex flex-col gap-[16px]">
        <div className="flex items-center gap-[8px]"></div>
        <Skeleton className="h-[20px]" />

        <div className="flex flex-col gap-[16px]">
          {Array.from({ length: 3 }).map((_, idx) => (
            <Skeleton key={idx} className="h-[40px] w-full rounded-[12px]" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamBodySkeleton;
