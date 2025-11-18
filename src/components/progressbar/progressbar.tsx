"use client";

import useMediaQuery from "@/hooks/use-media-query";
import cn from "@/utils/clsx";

/**
 * @author jinhyuk
 * @description 진행도를 보여주는 Progressbar 입니다.
 * @param progressRate - 진행 비율 수치 (0~100)
 */

interface ProgressbarProps {
  progressRate: number;
}

const Progressbar = ({ progressRate }: ProgressbarProps) => {
  const isPc = useMediaQuery("(min-width: 1280px)");
  const isTablet = useMediaQuery("(min-width: 744px) and (max-width: 1280px)");

  const patternStyle = isPc
    ? "repeating-linear-gradient(-45deg, #EBEFF5 0, #EBEFF5 46px, transparent 46px, transparent 92px)"
    : isTablet
      ? "repeating-linear-gradient(-45deg, #EBEFF5 0, #EBEFF5 26px, transparent 26px, transparent 52px)"
      : "repeating-linear-gradient(-45deg, #EBEFF5 0, #EBEFF5 15px, transparent 15px, transparent 30px)";

  return (
    <div
      className={cn(
        "relative h-[20px] w-full overflow-hidden rounded-[1000px] bg-gray-50",
        "min-w-[120px] tablet:h-[27px]"
      )}
      style={{
        backgroundImage: patternStyle,
      }}
    >
      <div
        className="absolute left-0 top-0 h-full rounded-[1000px] bg-blue-200"
        style={{ width: `${progressRate}%` }}
      ></div>
    </div>
  );
};

export default Progressbar;
