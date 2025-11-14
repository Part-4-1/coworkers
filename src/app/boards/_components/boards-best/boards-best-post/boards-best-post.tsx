"use client";

import cn from "@/utils/clsx";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PostCard, Button, Icon } from "@/components/index";
import { mockBoardPosts } from "@/mocks/board-post";

const BoardBestPost = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState<number | null>(null);
  const [maxItems, setMaxItems] = useState<number | null>(null);

  useEffect(() => {
    setCurrentIndex(0);

    const handleResize = () => {
      if (typeof window === "undefined") return;

      const width = window.innerWidth;
      if (width >= 1280) {
        setCardsToShow(3);
        setMaxItems(15);
      } else if (width >= 744) {
        setCardsToShow(2);
        setMaxItems(10);
      } else {
        setCardsToShow(1);
        setMaxItems(5);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (cardsToShow === null || maxItems === null) return null;

  const postsToUse = mockBoardPosts.slice(0, maxItems);
  const totalSlides = Math.ceil(postsToUse.length / cardsToShow);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const startIdx = currentIndex * cardsToShow;
  const visiblePosts = postsToUse.slice(startIdx, startIdx + cardsToShow);

  return (
    <div className="mx-auto flex w-full flex-col gap-4 tablet:max-w-[620px] pc:max-w-[1074px]">
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
              className="h-[177px] w-full max-w-[340px] py-5 tablet:max-w-[304px] tablet:px-5 pc:h-[206px] pc:max-w-[350px] pc:py-6"
              key={post.id}
              {...post}
              isBest={true}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="relative w-full gap-2 flex-center">
        <div className="gap-2 pt-[14px] flex-center tablet:pt-[22px] pc:pt-[34px]">
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

        <div
          className={cn(
            "absolute right-0 mr-[9px] mt-[10px] flex h-[24px] w-[64px] gap-2",
            "tablet:mr-[26px] tablet:mt-[24px] tablet:h-[32px] tablet:w-[72px]",
            "pc:mr-[22px] pc:mt-[22px]"
          )}
        >
          <Button
            onClick={handlePrev}
            variant="outlined"
            className="rounded-full border-gray-400"
          >
            <Icon icon="leftArrow" className="h-4 w-4" />
          </Button>
          <Button
            onClick={handleNext}
            variant="outlined"
            className="rounded-full border-gray-400"
          >
            <Icon icon="rightArrow" className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BoardBestPost;
