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
 * @param contents 모달 내부에 표출할 컴포넌트
 * @param showCloseBtn 닫기 버튼 표출 여부
 * @returns Modal: 표출되는 모달 컴포넌트 openPrompt: 모달을 표출하는 함수, closePrompt: 모달을 닫는 함수
 * @example const { Modal, openPrompt, closePrompt } = usePrompt(<Component />);
 */
const usePrompt = (contents: ReactNode, showCloseBtn = false) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const lockingScroll = useCallback((currentScrollY: number) => {
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.top = `-${currentScrollY}px`;
    document.body.style.overflowY = "scroll";
  }, []);

  const allowScroll = useCallback((currentScrollY: number) => {
    document.body.style.position = "";
    document.body.style.width = "";
    document.body.style.top = "";
    document.body.style.overflowY = "";
    window.scrollTo(0, currentScrollY);
  }, []);

  const openPrompt = useCallback(() => setIsOpen(true), []);
  const closePrompt = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const currentScrollY = window.scrollY;

    if (!dialogRef.current) return;

    if (isOpen && !dialogRef.current.open) {
      lockingScroll(currentScrollY);
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }

    return () => {
      allowScroll(currentScrollY);
      document.removeEventListener("mousedown", closePrompt);
    };
  }, [isOpen, showCloseBtn, contents, closePrompt]);

  const Modal = useCallback(() => {
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
        {contents}
      </dialog>,
      document.body
    );
  }, [isOpen, contents, showCloseBtn]);

  return { Modal, openPrompt, closePrompt };
};

export default usePrompt;
