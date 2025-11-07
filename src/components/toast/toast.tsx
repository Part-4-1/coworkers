"use client";

import { memo, useState, useEffect } from "react";
import { useSetAtom } from "jotai";
import { RemoveToastAtom } from "@/atoms/toast-atom";
import { ToastProps } from "@/types/toast";
import { Icon } from "@/components";

const Toast = memo(({ type, message }: ToastProps) => {
  const removeToastItem = useSetAtom(RemoveToastAtom);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const fadeOutTimeout = setTimeout(() => {
      setShow(false);
    }, 1000);

    return () => clearTimeout(fadeOutTimeout);
  }, []);

  const getStyles = () => {
    switch (type) {
      case "success":
        return {
          bg: "bg-blue-100",
          icon: "check" as const,
        };
      case "error":
        return {
          bg: "bg-red-100",
          icon: "alert" as const,
        };
      case "warning":
        return {
          bg: "bg-orange",
          icon: "alert" as const,
        };
      default:
        return {
          bg: "bg-blue-100",
          icon: "alert" as const,
        };
    }
  };

  const { bg, icon } = getStyles();

  return (
    <div
      className={`flex w-full max-w-[704px] cursor-pointer items-center justify-between rounded-lg px-6 py-3 shadow-lg transition-all duration-300 ease-in-out ${bg} ${
        show ? "animate-fade-in" : "animate-fade-out"
      }`}
      onClick={() => removeToastItem()}
    >
      <div className="flex items-center gap-3">
        <Icon icon={icon} className="h-6 w-6 text-white" />
        <p className="text-sm font-medium text-white">{message}</p>
      </div>
    </div>
  );
});

Toast.displayName = "Toast";

export default Toast;
