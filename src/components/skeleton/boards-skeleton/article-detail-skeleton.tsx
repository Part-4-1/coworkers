import Skeleton from "react-loading-skeleton";

const ArticleDetailSkeleton = () => {
  return (
    <main className="mx-auto my-[68px] w-full max-w-[343px] rounded-[20px] bg-white tablet:max-w-[620px] pc:max-w-[900px]">
      <article className="px-[20px] py-[88px] tablet:px-[40px] pc:px-[60px]">
        <div className="flex w-full flex-col gap-4 pb-[16px] tablet:pb-[28px]">
          <Skeleton height={24} width="60%" borderRadius="8px" />

          <div className="flex items-center gap-2 border-b pb-3">
            <Skeleton height={17} width={41} borderRadius="8px" />
            <div className="h-3 w-[1px] bg-gray-200"></div>
            <Skeleton height={17} width={106} borderRadius="8px" />
          </div>
        </div>

        <div className="mb-4 flex w-full flex-col gap-5 tablet:mb-[28px] tablet:gap-6 pc:mb-[40px]">
          <Skeleton
            width={140}
            height={140}
            borderRadius="8px"
            className="tablet:h-[200px] tablet:w-[200px]"
          />

          <div className="flex flex-col gap-2">
            <Skeleton height={20} borderRadius="8px" />
            <Skeleton height={20} borderRadius="8px" />
          </div>
        </div>

        <div>
          <div className="mb-3 mt-8 flex items-center justify-between tablet:mb-4 tablet:mt-[61px]">
            <div className="flex items-center gap-4">
              <Skeleton height={24} width={60} borderRadius="8px" />
              <Skeleton height={24} width={60} borderRadius="8px" />
            </div>
            <Skeleton height={20} width={20} borderRadius="4px" />
          </div>

          <div className="mb-[28px] flex items-center gap-4 tablet:mb-[36px]">
            <Skeleton
              circle
              width={32}
              height={32}
              containerClassName="tablet:h-[32px] tablet:w-[32px]"
            />
            <Skeleton
              height={40}
              containerClassName="flex-1"
              borderRadius="8px"
            />
          </div>

          <div className="flex flex-col gap-4">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div key={idx}>
                <hr className="border-gray-300 pb-5" />
                <div className="flex gap-3">
                  <Skeleton circle width={32} height={32} />
                  <div className="flex flex-1 flex-col gap-2">
                    <Skeleton height={17} width={41} borderRadius="8px" />
                    <Skeleton height={20} borderRadius="8px" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
};

export default ArticleDetailSkeleton;
