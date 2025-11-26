"use client";

import useToast from "@/hooks/use-toast";
import { deleteCookie, setCookie } from "@/utils/cookie-utils";
import { setAuthCookies } from "@/utils/setAuthCookies";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import randomStringGenerator from "@/utils/random-string-generator";
import { LoadingSpinner } from "@/components";

const Redirect = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const queryClient = useQueryClient();
  const redirect_uri = process.env.NEXT_PUBLIC_REDIRECT_URI;
  const code = searchParams.get("code");
  const state = randomStringGenerator(10);
  const { success: ToastSuccess, error: ToastError } = useToast();

  const isProcessing = useRef(false);

  useEffect(() => {
    if (!code || isProcessing.current) return;
    isProcessing.current = true;

    const kakaoSignin = async () => {
      try {
        deleteCookie("accessToken");
        deleteCookie("refreshToken");

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/signIn/KAKAO`,
          {
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              state: state,
              redirectUri: redirect_uri,
              token: code,
            }),
            method: "POST",
          }
        );
        const data = await response.json();

        if (!response.ok) throw new Error("로그인 실패");

        if (data.accessToken && data.refreshToken) {
          setCookie("accessToken", data.accessToken);
          setCookie("refreshToken", data.refreshToken);
          await setAuthCookies(data.accessToken, data.refreshToken);
        }

        queryClient.setQueryData(["userInfo"], () => {
          return { ...data.user };
        });

        ToastSuccess("로그인이 되었습니다.");

        router.replace("/boards");
      } catch (error) {
        console.error(error);
        ToastError("로그인 실패");
        router.push("/signin");
      }
    };

    kakaoSignin();
  }, [code, router, redirect_uri, ToastSuccess, ToastError, queryClient]);

  return (
    <div className="h-screen w-full flex-center">
      <LoadingSpinner className="h-10 w-10" />
    </div>
  );
};

export default Redirect;
