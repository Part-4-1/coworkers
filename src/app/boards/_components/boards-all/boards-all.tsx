"use client";

import { useState } from "react";
import { useGetArticles } from "@/hooks/api/articles/use-get-articles";
import BoardsAllHeader from "./boards-all-header/boards-all-header";
import BoardAllPost from "./boards-all-post/boards-all-post";
import { ArticlesListSkeleton } from "@/components";

const BoardsAll = ({ keyword }: { keyword: string }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [orderBy, setOrderBy] = useState("recent");

  const { data: allArticles, isPending } = useGetArticles(
    currentPage,
    6,
    orderBy,
    keyword
  );

  return (
    <div className="flex flex-col gap-5">
      <BoardsAllHeader
        onOrderByChange={setOrderBy}
        onPageReset={() => setCurrentPage(1)}
      />
      {isPending ? (
        <ArticlesListSkeleton count={6} isBest={false} />
      ) : (
        <BoardAllPost
          articles={allArticles?.list || []}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          totalCount={allArticles?.totalCount || 0}
        />
      )}
    </div>
  );
};

export default BoardsAll;
