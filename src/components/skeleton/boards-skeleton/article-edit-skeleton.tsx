import Skeleton from "react-loading-skeleton";
import cn from "@/utils/clsx";

const ArticleEditSkeleton = () => {
  return (
    <div className="mx-auto mt-[36px] w-full max-w-[343px] rounded-[20px] bg-white tablet:mb-[137px] tablet:mt-[117px] tablet:max-w-[620px] pc:my-[100px] pc:max-w-[900px]">
      <div
        className={cn(
          "flex w-full flex-col gap-[48px] px-[22px] py-[45px]",
          "tablet:gap-[57px] tablet:px-[40px] tablet:py-[73px]",
          "pc:px-[70px]"
        )}
      >
        <div className="flex flex-col gap-[32px]">
          <Skeleton height={24} width={100} borderRadius="8px" />

          <div className="flex flex-col items-start gap-3">
            <Skeleton height={24} width={49} borderRadius="8px" />
            <Skeleton
              height={48}
              containerClassName="w-full"
              borderRadius="12px"
            />
          </div>

          <div className="flex flex-col items-start gap-3">
            <Skeleton height={24} width={49} borderRadius="8px" />
            <Skeleton
              height={240}
              containerClassName="w-full"
              borderRadius="12px"
            />
          </div>

          <div className="flex flex-col items-start gap-3">
            <Skeleton height={19} width={42} borderRadius="8px" />
            <Skeleton height={120} width={120} borderRadius="8px" />
          </div>
        </div>

        <Skeleton height={48} containerClassName="w-full" borderRadius="8px" />
      </div>
    </div>
  );
};

export default ArticleEditSkeleton;
