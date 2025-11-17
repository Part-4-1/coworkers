"use client";

import { sendPasswordResetEmailAction } from "@/api/auth/send-password-reset-email-action";
import useToast from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";

export const useSendPasswordResetQuery = () => {
  const { error: ToastError, success: ToastSuccess } = useToast();
  return useMutation({
    mutationFn: sendPasswordResetEmailAction,
    onSuccess: (data) => {
      ToastSuccess(data.message);
    },
    onError: () => {
      ToastError("링크를 보내지 못했습니다. 이메일을 확인해주세요.");
    },
  });
};
