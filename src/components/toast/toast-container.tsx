"use client";

import { useState, useEffect } from "react";
import { useAtomValue } from "jotai";
import ReactDOM from "react-dom";
import { ToastDataAtom } from "@/atoms/toast-atom";
import Toast from "./toast";

const ToastContainer = () => {
  const [isClient, setIsClient] = useState(false);
  const toast = useAtomValue(ToastDataAtom);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="fixed left-1/2 top-8 z-50 -translate-x-1/2">
      {toast && <Toast {...toast} />}
    </div>,
    document.body
  );
};

export default ToastContainer;
