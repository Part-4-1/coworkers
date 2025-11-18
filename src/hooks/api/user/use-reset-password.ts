"use client";

import { resetPassword } from "@/api/auth/reset-password";
import useToast from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useResetPassword = () => {
  const { success: ToastSuccess, error: ToastError } = useToast();
  const router = useRouter();
  return useMutation({
    mutationFn: resetPassword,
    onSuccess: () => {
      ToastSuccess("비밀번호 재설정에 성공하였습니다. 로그인을 해주세요.");
      router.push("/signin");
    },
    onError: (error) => {
      console.log(error);
      ToastError("비밀번호 재설정을 실패했습니다.");
    },
  });
};
