"use client";

import { signinAction } from "@/api/auth/signin-action";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useSigninQuery = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: signinAction,
    onSuccess: () => {
      router.push("/");
    },
    onError: (error) => {
      console.log("로그인 error");
    },
  });
};
