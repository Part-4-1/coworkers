import plugin from "tailwindcss/plugin";
import type { CSSRuleObject } from "tailwindcss/types/config";

/**
 * @fileoverview
 * Tailwind CSS 커스텀 스타일 플러그인 모음 파일
 * - 반복되는 스타일 코드를 재사용 가능하도록 정의
 * - IntelliSense 자동완성 지원을 위한 파일
 *
 * @author Junyeol
 */

/**
 * flex items-center justify-center -> flex-center
 * 가로 방향 flex + 중앙 정렬
 * 사용 예시 : <div className="flex-center">...</div>
 */

export const flexCenter = plugin(({ addUtilities }) => {
  const newUtilities: Record<string, CSSRuleObject> = {
    ".flex-center": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  addUtilities(newUtilities);
});

/**
 * flex-col items-center justify-center -> flex-col-center
 * 세로 방향 flex + 중앙 정렬
 * 사용 예시 : <div className="flex-col-center">...</div>
 */

export const flexColCenter = plugin(({ addUtilities }) => {
  const newUtilities: Record<string, CSSRuleObject> = {
    ".flex-col-center": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  addUtilities(newUtilities);
});
