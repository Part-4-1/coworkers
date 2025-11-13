"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PostCard, Button, Icon } from "@/components/index";
import { mockBoardPosts } from "@/mocks/board-post";

const BoardBestPost = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window === "undefined") return;

      const width = window.innerWidth;
      if (width >= 1280) setCardsToShow(3);
      else if (width >= 744) setCardsToShow(2);
      else setCardsToShow(1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (cardsToShow === null) return null;

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
    <div className="mx-auto flex w-full flex-col gap-4 tablet:max-w-[620px] pc:max-w-[1074px]">
      <div className="flex items-center gap-4">
        <Button onClick={handlePrev} variant="none">
          <Icon icon="leftArrow" className="h-6 w-6" />
        </Button>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid flex-1 grid-cols-1 gap-4 tablet:grid-cols-2 pc:grid-cols-3"
          >
            {visiblePosts.map((post) => (
              <PostCard
                className="w-full max-w-[340px] tablet:max-w-[304px] pc:max-w-[350px]"
                key={post.id}
                {...post}
                isBest={true}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        <Button onClick={handleNext} variant="none">
          <Icon icon="rightArrow" className="h-6 w-6" />
        </Button>
      </div>

      <div className="flex items-center justify-center gap-2 py-3 tablet:py-5 pc:py-9">
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
    </div>
  );
};

export default BoardBestPost;
