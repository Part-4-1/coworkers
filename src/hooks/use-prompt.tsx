"use client";

import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const usePrompt = (contents: ReactNode) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openPrompt = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closePrompt = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (!dialogRef.current) return;

    if (isOpen && !dialogRef.current.open) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isOpen]);

  const Prompt = useCallback(() => {
    if (!isOpen) return null;

    return createPortal(
      <dialog ref={dialogRef} onClose={closePrompt} className="px-4 pb-8 pt-4">
        {contents}
      </dialog>,
      document.body
    );
  }, [isOpen]);

  return { Prompt, openPrompt, closePrompt };
};

export default usePrompt;
