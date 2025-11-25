import cn from "@/utils/clsx";
import Skeleton from "react-loading-skeleton";

const BannerAdminSkeleton = () => {
  return (
    <div
      className={cn(
        "relative flex min-w-[270px] flex-col justify-between bg-white shadow-xl",
        "h-[196px] w-full pb-[30px] pl-[25px] pr-[28px] pt-[20px] tablet:rounded-[20px]",
        "tablet:h-[239px] tablet:pb-[34px] tablet:pt-[30px] pc:pr-[36px] pc:pt-[32px]"
      )}
    >
      <div className="w-full">
        <Skeleton
          className="h-[32px] rounded-[20px]"
          containerClassName="w-full "
        />
      </div>

      <div
        className={cn(
          "flex h-[84px] w-full justify-center gap-[22px]",
          "tablet:h-[108px]"
        )}
      >
        <Skeleton
          containerClassName="flex-1"
          className="h-full rounded-[20px]"
        />
      </div>
    </div>
  );
};

export default BannerAdminSkeleton;
