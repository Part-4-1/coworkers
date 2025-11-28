import Skeleton from "react-loading-skeleton";

const HistorySkeleton = () => {
  return (
    <div className="flex h-full w-full max-w-[1120px] flex-col gap-4 py-[50px] tablet:gap-[34px] tablet:px-[26px] pc:gap-12">
      <div className="mx-4 flex flex-1 flex-col overflow-hidden rounded-[20px] bg-white px-5 pb-[52px] pt-[33px] tablet:mx-0 tablet:px-[30px] pc:px-[37px]">
        <div className="flex h-full flex-col gap-[27px] overflow-hidden">
          <p className="text-2lg font-bold">마이 히스토리</p>
          <div className="mt-[27px] flex flex-col gap-3">
            {Array.from({ length: 3 }).map((_, idx) => {
              return (
                <Skeleton
                  key={idx}
                  containerClassName="flex h-[72px]"
                  className="h-full"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistorySkeleton;
