import Skeleton from "react-loading-skeleton";

const TeamMemberSectionSkeleton = () => {
  return (
    <div className="mb-[290px] mt-[48px] px-[16px] tablet:mb-[230px] tablet:px-[0px] pc:mx-auto pc:mb-[67px] pc:w-full pc:max-w-[1120px]">
      <div className="flex flex-col gap-[24px]">
        <div className="grid w-full grid-cols-2 gap-[12px] tablet:grid-cols-3 pc:grid-cols-3">
          {Array.from({ length: 3 }).map((_, idx) => (
            <div
              key={idx}
              className="flex h-[72px] w-full items-center gap-[12px] rounded-[12px] bg-white p-[12px]"
            >
              <Skeleton className="h-[48px] w-[48px] rounded-full" />
              <div className="flex flex-1 flex-col gap-[6px]">
                <Skeleton className="h-[16px]" />
                <Skeleton className="h-[16px]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberSectionSkeleton;
