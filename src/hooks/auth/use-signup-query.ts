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
      console.log(error.message);
      ToastError("이미 사용중인 닉네임 혹은 이메일 입니다.");
    },
  });
};
