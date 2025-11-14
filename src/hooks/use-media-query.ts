"use client";

import { useState, useEffect } from "react";

/**
 * @author leohan
 * 미디어 쿼리 문자열을 감지하여 일치 여부를 반환하는 훅
 * @param size - 감지할 미디어 쿼리 문자열
 */

const useMediaQuery = (size: string) => {
  const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQueryList = window.matchMedia(size);

    const handleInitialMatch = () => {
      setIsMatch(mediaQueryList.matches);
    };
    handleInitialMatch();

    const handleChange = (event: MediaQueryListEvent) => {
      setIsMatch(event.matches);
    };
    mediaQueryList.addEventListener("change", handleChange);

    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }, [size]);
  return isMatch;
};

export default useMediaQuery;
