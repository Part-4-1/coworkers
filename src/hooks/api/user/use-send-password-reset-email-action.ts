"use client";

import { sendPasswordResetEmailAction } from "@/api/auth/send-password-reset-email-action";
import useToast from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";

export const useSendPasswordResetQuery = () => {
  const { error: ToastError, success: ToastSuccess } = useToast();
  return useMutation({
    mutationFn: sendPasswordResetEmailAction,
    onSuccess: () => {
      ToastSuccess("새 비밀번호 설정 링크를 이메일로 전송해드렸습니다.");
    },
    onError: () => {
      ToastError("링크를 보내지 못했습니다. 이메일을 확인해주세요.");
    },
  });
};
