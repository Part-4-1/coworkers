import { useSetAtom } from "jotai";
import { ToastAtom } from "@/atoms/toast-atom";

const useToast = () => {
  const addToast = useSetAtom(ToastAtom);

  return {
    success: (message: string) => addToast({ type: "success", message }),
    error: (message: string) => addToast({ type: "error", message }),
    warning: (message: string) => addToast({ type: "warning", message }),
  };
};

export default useToast;
