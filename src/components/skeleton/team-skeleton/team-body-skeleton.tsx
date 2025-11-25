import Skeleton from "react-loading-skeleton";

const TeamBodySkeleton = () => {
  return (
    <div className="px-[16px] tablet:px-[0px] pc:px-[0px]">
      <div className="mb-[28px] mt-[32px] border-[1px] border-gray-300" />

      <div className="flex flex-col gap-[16px]">
        <header className="">
          <div className="flex items-center gap-[8px]"></div>
          <Skeleton className="h-[20px] w-[140px]" />
        </header>

        <div className="flex flex-col gap-[16px]">
          {Array.from({ length: 3 }).map((_, idx) => (
            <div
              key={idx}
              className="flex h-[40px] w-full rounded-[12px] bg-white"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamBodySkeleton;
