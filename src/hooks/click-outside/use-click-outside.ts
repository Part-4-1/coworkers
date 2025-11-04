"use-client";

import { RefObject, useEffect } from "react";

/**
 * @author jinhyuk
 * @description 대상 요소(ref)의 외부를 클릭했을때 콜백을 실행하는 훅
 * @param ref - 대상 요소의 ref
 * @param handler - 외부 클릭시 실행할 함수
 * @param isOpen - true 일때만 클릭 리스너를 등록
 */

const useClickOutside = <T extends HTMLElement>(
  ref: RefObject<T | null>,
  handler: () => void,
  isOpen: boolean
) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handler();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, ref, handler]);
};

export default useClickOutside;
