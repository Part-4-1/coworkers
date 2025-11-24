import Skeleton from "react-loading-skeleton";

const TaskCardSkeleton = () => {
  return (
    <Skeleton count={3} height={54} width={270} containerClassName="flex-1" />
  );
};

export default TaskCardSkeleton;
