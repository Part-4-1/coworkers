"use client";

import { signinAction } from "@/api/auth/signin-action";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import useToast from "../use-toast";

export const useSigninQuery = () => {
  const router = useRouter();
  const { error: ToastError } = useToast();

  return useMutation({
    mutationFn: signinAction,
    onSuccess: () => {
      router.push("/boards");
    },
    onError: (error) => {
      console.log(error.message);
      ToastError("이메일 혹은 비밀번호가 잘못되었습니다. 다시 시도해주세요.");
    },
  });
};
