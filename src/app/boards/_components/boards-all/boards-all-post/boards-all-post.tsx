"use client";

import cn from "@/utils/clsx";
import Link from "next/link";
import { PostCard, Icon, Button } from "@/components/index";
import { Article } from "@/types/article";
import { useState } from "react";

const PAGE_COUNT = 5;

interface BoardAllArticlesProps {
  articles: Article[];
  currentPage: number;
  onPageChange: (page: number) => void;
  totalCount?: number; // 전체 게시글 수
}

const BoardAllPost = ({
  articles,
  currentPage,
  onPageChange,
  totalCount = 0,
}: BoardAllArticlesProps) => {
  const [startPage, setStartPage] = useState(1);

  const PER_PAGE_COUNT = 6;
  const totalPage = Math.ceil(totalCount / PER_PAGE_COUNT);
  const lastPage = Math.min(startPage + PAGE_COUNT - 1, totalPage);

  const handlePageClick = (page: number) => {
    const newStartPage = Math.max(
      1,
      Math.floor((page - 1) / PAGE_COUNT) * PAGE_COUNT + 1
    );
    setStartPage(newStartPage);
    onPageChange(page);
  };

  const handlePrevGroup = () => {
    if (startPage > 1) {
      const newStartPage = startPage - PAGE_COUNT;
      setStartPage(newStartPage);
      onPageChange(newStartPage);
    }
  };

  const handleNextGroup = () => {
    if (startPage + PAGE_COUNT <= totalPage) {
      const newStartPage = startPage + PAGE_COUNT;
      setStartPage(newStartPage);
      onPageChange(newStartPage);
    }
  };

  const pageArray = Array.from({ length: totalPage }, (_, i) => i + 1);

  return (
    <div className="flex flex-col gap-8">
      <div
        className={cn(
          "mx-auto grid w-full max-w-[340px] grid-cols-1 gap-4",
          "tablet:max-w-[620px] tablet:grid-cols-1",
          "pc:max-w-[1074px] pc:grid-cols-2"
        )}
      >
        {articles.map((article) => (
          <Link key={article.id} href={`/boards/${article.id}`}>
            <PostCard {...article} image={article.image} isBest={false} />
          </Link>
        ))}
      </div>

      <div className="gap-4 pb-20 flex-center">
        <Button
          variant="none"
          disabled={startPage <= 1}
          onClick={handlePrevGroup}
          className="flex disabled:opacity-50"
        >
          <Icon icon="leftArrow" className="h-4 w-4" />
          <Icon icon="leftArrow" className="-ml-2 h-4 w-4" />
        </Button>

        <Button
          variant="none"
          disabled={currentPage <= 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="disabled:opacity-50"
        >
          <Icon icon="leftArrow" className="h-4 w-4" />
        </Button>

        <div className="flex gap-2">
          {pageArray.slice(startPage - 1, lastPage).map((pageNumber) => (
            <Button
              variant="none"
              key={pageNumber}
              onClick={() => handlePageClick(pageNumber)}
              className={cn(
                "h-8 w-8 rounded-full text-sm font-medium flex-center",
                currentPage === pageNumber
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              )}
            >
              {pageNumber}
            </Button>
          ))}
        </div>

        <Button
          variant="none"
          disabled={currentPage + 1 > totalPage}
          onClick={() => onPageChange(currentPage + 1)}
          className="disabled:opacity-50"
        >
          <Icon icon="rightArrow" className="h-4 w-4" />
        </Button>

        <Button
          variant="none"
          disabled={startPage + PAGE_COUNT > totalPage}
          onClick={handleNextGroup}
          className="flex disabled:opacity-50"
        >
          <Icon icon="rightArrow" className="h-4 w-4" />
          <Icon icon="rightArrow" className="-ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default BoardAllPost;
