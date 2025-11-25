import Skeleton from "react-loading-skeleton";

interface ArticlesListSkeletonProps {
  count?: number;
  isBest?: boolean;
}

const ArticlesListSkeleton = ({
  count = 6,
  isBest = false,
}: ArticlesListSkeletonProps) => {
  const height = isBest
    ? "h-[177px] tablet:h-[177px] pc:h-[206px]"
    : "h-[120px] tablet:h-[130px] pc:h-[140px]";

  return (
    <div
      className={
        isBest
          ? "grid grid-cols-1 gap-4 tablet:grid-cols-2 pc:grid-cols-3"
          : "mx-auto grid w-full max-w-[340px] grid-cols-1 gap-4 tablet:max-w-[620px] pc:max-w-[1074px] pc:grid-cols-2"
      }
    >
      {Array.from({ length: count }).map((_, idx) => (
        <Skeleton
          key={idx}
          containerClassName={`${height} w-full`}
          className="h-full rounded-full"
        />
      ))}
    </div>
  );
};

export default ArticlesListSkeleton;
