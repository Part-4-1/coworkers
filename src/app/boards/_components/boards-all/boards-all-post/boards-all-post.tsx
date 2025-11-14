"use client";

import { useEffect, useState } from "react";
import cn from "@/utils/clsx";
import { PostCard, Icon, Button } from "@/components/index";
import { mockBoardPosts } from "@/mocks/board-post";

const PER_PAGE_COUNT = 6;
const PAGE_COUNT = 5;

const BoardAllPost = ({ posts = mockBoardPosts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [startPage, setStartPage] = useState(1);

  const totalPage = Math.ceil(posts.length / PER_PAGE_COUNT);
  const lastPage = Math.min(startPage + PAGE_COUNT - 1, totalPage);
  const startIdx = (currentPage - 1) * PER_PAGE_COUNT;
  const currentPosts = posts.slice(startIdx, startIdx + PER_PAGE_COUNT);

  useEffect(() => {
    const newStartPage = Math.max(
      1,
      Math.floor((currentPage - 1) / PAGE_COUNT) * PAGE_COUNT + 1
    );
    setStartPage(newStartPage);
  }, [currentPage]);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrevGroup = () => {
    if (startPage > 1) {
      const newStartPage = startPage - PAGE_COUNT;
      setStartPage(newStartPage);
      setCurrentPage(newStartPage);
    }
  };

  const handleNextGroup = () => {
    if (startPage + PAGE_COUNT <= totalPage) {
      const newStartPage = startPage + PAGE_COUNT;
      setStartPage(newStartPage);
      setCurrentPage(newStartPage);
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
        {currentPosts.map((post) => (
          <PostCard key={post.id} {...post} isBest={false} />
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
          onClick={() => setCurrentPage(currentPage - 1)}
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
          onClick={() => setCurrentPage(currentPage + 1)}
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
