"use client";

import { signupAction } from "@/api/auth/signup-action";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useSignupQuery = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: signupAction,
    onSuccess: () => {
      router.push("/");
    },
    onError: (error) => {
      console.log("회원가입 error");
    },
  });
};
