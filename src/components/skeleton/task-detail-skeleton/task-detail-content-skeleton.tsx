import Skeleton from "react-loading-skeleton";

const TaskDetailContentSkeleton = () => {
  return (
    <ul className="flex flex-col gap-px">
      <Skeleton containerClassName="flex w-full h-[17px]" className="h-full" />
      <Skeleton containerClassName="flex w-full h-[17px]" className="h-full" />
    </ul>
  );
};

export default TaskDetailContentSkeleton;
