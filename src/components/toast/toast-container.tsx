"use client";

import { useState, useEffect, useRef } from "react";
import { useAtomValue } from "jotai";
import ReactDOM from "react-dom";
import { ToastDataAtom } from "@/atoms/toast-atom";
import Toast from "./toast";

const ToastContainer = () => {
  const [isClient, setIsClient] = useState(false);
  const toast = useAtomValue(ToastDataAtom);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!dialogRef.current) return;

    if (toast) {
      if (!dialogRef.current.open) {
        dialogRef.current.showModal();
      }
    } else {
      dialogRef.current.close();
    }
  }, [toast]);

  if (!isClient) {
    return null;
  }

  return ReactDOM.createPortal(
    <dialog
      ref={dialogRef}
      className="pointer-events-none fixed inset-0 flex h-full w-full items-start justify-center border-0 bg-transparent p-0 pt-8 outline-none backdrop:bg-transparent"
    >
      {toast && <Toast {...toast} />}
    </dialog>,
    document.body
  );
};

export default ToastContainer;
