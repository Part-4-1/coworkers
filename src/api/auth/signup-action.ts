"use server";
import type { User } from "@/types/user";
import { setAuthCookies } from "@/utils/setAuthCookies";

export interface SignupRequest {
  email: string;
  nickname: string;
  password: string;
  passwordConfirmation: string;
}

export interface SignupResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export const signupAction = async ({
  email,
  nickname,
  password,
  passwordConfirmation,
}: SignupRequest): Promise<SignupResponse> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/signUp`,
      {
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          nickname,
          password,
          passwordConfirmation,
        }),
        method: "POST",
      }
    );
    const data = await response.json();

    if (!response.ok) throw new Error("회원가입에 실패하였습니다.");

    if (data.accessToken && data.refreshToken) {
      await setAuthCookies(data.accessToken, data.refreshToken);
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("회원가입 중 알 수 없는 오류가 발생했습니다.");
  }
};
