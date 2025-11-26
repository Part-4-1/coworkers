import Skeleton from "react-loading-skeleton";

const TaskItemSkeleton = () => {
  return (
    <div className="flex flex-col gap-3">
      {Array.from({ length: 3 }).map((_, idx) => (
        <Skeleton
          key={idx}
          containerClassName="h-[68px] tablet:h-[76px] w-full"
          className="h-full"
        />
      ))}
    </div>
  );
};

export default TaskItemSkeleton;
