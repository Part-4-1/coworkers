import Skeleton from "react-loading-skeleton";

const CalendarListSkeleton = () => {
  return (
    <div className="flex w-full items-center gap-1 tablet:gap-2 pc:gap-3">
      {Array.from({ length: 7 }).map((_, idx) => (
        <Skeleton
          key={idx}
          containerClassName="w-full flex-1 h-[51px] tablet:h-[70px] rounded-lg tablet:rounded-xl"
          className="h-full"
        />
      ))}
    </div>
  );
};

export default CalendarListSkeleton;
