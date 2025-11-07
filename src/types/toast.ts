export type ToastType = "success" | "error" | "warning";

export interface ToastProps {
  type: ToastType;
  message: string;
}
