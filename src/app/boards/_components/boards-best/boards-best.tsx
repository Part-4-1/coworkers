import cn from "@/utils/clsx";
import BoardsBestHeader from "./boards-best-header/boards-best-header";
import BoardBestPost from "./boards-best-post/boards-best-post";

const BoardsBest = () => {
  return (
    <div
      className={cn(
        "mx-auto h-[314px] w-full rounded-none bg-gray-100 px-[18px]",
        "tablet:h-[326px]",
        "pc:h-[370px] pc:max-w-[1120px] pc:rounded-[20px]"
      )}
    >
      <div
        className={cn(
          "mx-auto flex h-[218px] w-full flex-col gap-[25px] pt-[41px]",
          "tablet:h-[177px] tablet:max-w-[620px]",
          "pc:h-[255px] pc:max-w-[1074px]"
        )}
      >
        <BoardsBestHeader />
        <BoardBestPost />
      </div>
    </div>
  );
};

export default BoardsBest;
