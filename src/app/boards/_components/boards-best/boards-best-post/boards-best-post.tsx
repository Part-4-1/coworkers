"use client";

import { useState, useEffect } from "react";
import { PostCard, Button, Icon } from "@/components/index";
import { mockBoardPosts } from "@/mocks/board-post";

const BoardBestPost = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window === "undefined") return;

      const width = window.innerWidth;
      if (width >= 1280) setCardsToShow(3);
      else if (width >= 376) setCardsToShow(2);
      else setCardsToShow(1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(mockBoardPosts.length / cardsToShow);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const startIdx = currentIndex * cardsToShow;
  const visiblePosts = mockBoardPosts.slice(startIdx, startIdx + cardsToShow);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div className="grid flex-1 grid-cols-1 gap-4 tablet:grid-cols-2 pc:grid-cols-3">
          {visiblePosts.map((post) => (
            <PostCard key={post.id} {...post} isBest={true} />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-1 justify-center gap-2">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`rounded-full transition-all ${
                idx === currentIndex
                  ? "h-2 w-4 bg-gray-800"
                  : "h-2 w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>

        <div className="mr-[45px] flex gap-2">
          <Button
            onClick={handlePrev}
            variant="outlined"
            className="h-8 w-8 rounded-full border-gray-400"
          >
            <Icon icon="leftArrow" className="h-6 w-6" />
          </Button>
          <Button
            onClick={handleNext}
            variant="outlined"
            className="h-8 w-8 rounded-full border-gray-400"
          >
            <Icon icon="rightArrow" className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BoardBestPost;
