"use client";

import ToastContainer from "@/components/toast/toast-container";

export function ToastProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ToastContainer />
      {children}
    </>
  );
}
