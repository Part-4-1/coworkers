"use client";

import { signupAction } from "@/api/auth/signup-action";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import useToast from "../use-toast";

export const useSignupQuery = () => {
  const router = useRouter();
  const { error: ToastError } = useToast();

  return useMutation({
    mutationFn: signupAction,
    onSuccess: () => {
      router.push("/");
    },
    onError: (error) => {
      ToastError(error.message || "회원가입 중 오류가 발생했습니다.");
    },
  });
};
