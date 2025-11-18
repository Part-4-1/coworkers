"use client";

import { Button, Icon } from "@/components";
import cn from "@/utils/clsx";
import {
  MouseEvent,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

/**
 * @author hwitae
 * @description 모달을 표출하는 커스텀 훅 입니다.
 * @param showCloseBtn 닫기 버튼 표출 여부
 * @returns Modal: 표출되는 모달 컴포넌트 openPrompt: 모달을 표출하는 함수, closePrompt: 모달을 닫는 함수
 * @example const { Modal, openPrompt, closePrompt } = usePrompt(<Component />);
 */
const usePrompt = (showCloseBtn = false) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const lockingScroll = useCallback(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;
  }, []);

  const allowScroll = useCallback(() => {
    document.documentElement.style.overflow = "unset";
    document.body.style.paddingRight = "0px";
  }, []);

  const openPrompt = useCallback(() => setIsOpen(true), []);
  const closePrompt = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!dialogRef.current) return;

    if (isOpen && !dialogRef.current.open) {
      lockingScroll();
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }

    return () => {
      allowScroll();
      document.removeEventListener("mousedown", closePrompt);
    };
  }, [isOpen, showCloseBtn, closePrompt]);

  const Modal = useCallback(
    ({ children }: { children: ReactNode }) => {
      const handleBackdropClick = (e: MouseEvent<HTMLDialogElement>) => {
        if (e.target === e.currentTarget) {
          closePrompt();
        }
      };

      if (!isOpen) return null;

      return createPortal(
        <dialog
          ref={dialogRef}
          onClose={closePrompt}
          onClick={handleBackdropClick}
          className={cn(
            "mx-0 mb-0 mt-auto flex w-full max-w-none flex-col items-end",
            "rounded-3xl rounded-b-none px-4 pb-8 pt-4",
            "tablet:m-auto tablet:w-fit tablet:rounded-b-3xl"
          )}
        >
          {showCloseBtn && (
            <Button variant="none" onClick={closePrompt}>
              <Icon icon="x" className="h-6 w-6" />
            </Button>
          )}
          {children}
        </dialog>,
        document.body
      );
    },
    [isOpen, showCloseBtn]
  );

  return { Modal, openPrompt, closePrompt };
};

export default usePrompt;
