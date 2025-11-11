"use client";

import { memo, useState, useEffect } from "react";
import { useSetAtom } from "jotai";
import { RemoveToastAtom } from "@/atoms/toast-atom";
import { ToastProps } from "@/types/toast";
import Icon from "../icon/Icon";

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
          bg: "bg-emerald-400",
          icon: "check" as const,
        };
      case "error":
        return {
          bg: "bg-red-200",
          icon: "alert" as const,
        };
      case "warning":
        return {
          bg: "bg-orange",
          icon: "pencil" as const,
        };
    }
  };

  const { bg, icon } = getStyles();

  return (
    <div
      className={`flex w-[343px] cursor-pointer items-center rounded-lg px-6 py-3 shadow-lg transition-all duration-300 ease-in-out tablet:w-[434px] ${bg} ${
        show ? "animate-fade-in" : "animate-fade-out"
      }`}
      onClick={() => removeToastItem()}
    >
      <div className="flex items-center gap-3">
        <Icon
          icon={icon}
          className="h-[18px] w-[18px] shrink-0 text-white tablet:h-6 tablet:w-6"
        />
        <p className="truncate text-md font-normal text-white">{message}</p>
      </div>
    </div>
  );
});

Toast.displayName = "Toast";

export default Toast;
