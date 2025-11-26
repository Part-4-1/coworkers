import cn from "@/utils/clsx";
import Skeleton from "react-loading-skeleton";

interface BannerMemberSkeletonProps {
  className?: string;
}

const BannerMemberSkeleton = ({ className }: BannerMemberSkeletonProps) => {
  return (
    <div
      className={cn(
        "relative flex h-[56px] w-full justify-between bg-white pl-[18px] pr-[16px]",
        "items-center tablet:h-[64px] tablet:rounded-[12px] tablet:pl-[26px] tablet:pr-[20px]",
        "min-w-[270px]",
        className
      )}
    >
      <div className="w-[200px] tablet:w-[300px]">
        <Skeleton className="h-[32px]" borderRadius="12px" />
      </div>
    </div>
  );
};

export default BannerMemberSkeleton;
