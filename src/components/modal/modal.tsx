"use client";

import { ReactNode, Ref, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  children: ReactNode;
  isOpen?: boolean;
  onCancel?: () => void;
  ref: Ref<HTMLDialogElement>;
  onClose?: () => void;
}

const Modal = ({ children, isOpen, onCancel, ref }: ModalProps) => {
  // useEffect(() => {
  //   if (!dialogRef.current?.open && isOpen) {
  //     console.log("show");
  //     dialogRef.current?.showModal();
  //     console.log("none");
  //   } else {
  //     dialogRef.current?.close();
  //   }
  // }, [isOpen]);

  return createPortal(
    <dialog ref={ref} onCancel={onCancel} onClose={onCancel}>
      {children}
    </dialog>,
    document.body
  );
};

export default Modal;
