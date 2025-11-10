import { atom } from "jotai";
import type { ToastProps } from "@/types/toast";

export const ToastDataAtom = atom<ToastProps | null>(null);

export const ToastAtom = atom(null, (_, set, { type, message }: ToastProps) => {
  const newToast = {
    type,
    message,
  };
  set(ToastDataAtom, newToast);

  setTimeout(() => {
    set(ToastDataAtom, null);
  }, 1200);
});

export const RemoveToastAtom = atom(null, (_, set) => {
  set(ToastDataAtom, null);
});
