import Skeleton from "react-loading-skeleton";

const CommentListSkeleton = () => {
  return (
    <ul className="flex flex-col gap-8">
      {Array.from({ length: 2 }).map((_, index) => (
        <li key={index} className="flex flex-col gap-4">
          <div className="flex gap-4">
            <Skeleton containerClassName="flex w-6 h-6" className="h-full" />
            <div className="flex flex-1 flex-col gap-1">
              <Skeleton
                containerClassName="flex w-full h-6"
                className="h-full"
              />
              <Skeleton
                containerClassName="flex w-full h-[22.75px]"
                className="h-full"
              />
              <Skeleton
                containerClassName="flex w-full h-[17px]"
                className="h-full"
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CommentListSkeleton;
