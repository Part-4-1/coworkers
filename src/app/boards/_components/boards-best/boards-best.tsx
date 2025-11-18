"use client";

import cn from "@/utils/clsx";
import { useGetArticles } from "@/hooks/api/articles/use-get-articles";
import BoardsBestHeader from "./boards-best-header/boards-best-header";
import BoardBestPost from "./boards-best-post/boards-best-post";

const BoardsBest = () => {
  const { data: bestArticles, isPending } = useGetArticles(1, 15, "like");

  if (isPending) return <div>로딩중...</div>;

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
          "talbet:gap-[20px] mx-auto flex w-full max-w-[340px] flex-col gap-[20px] pt-[41px] pc:gap-[25px]",
          "tablet:max-w-[620px]",
          "pc:max-w-[1074px]"
        )}
      >
        <BoardsBestHeader />
        <BoardBestPost articles={bestArticles?.list || []} />
      </div>
    </div>
  );
};

export default BoardsBest;
