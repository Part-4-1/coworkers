"use server";

import { User } from "@/types/user";
import { setAuthCookies } from "@/utils/setAuthCookies";

export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignInResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export const signinAction = async ({
  email,
  password,
}: SignInRequest): Promise<SignInResponse> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/signIn`,
      {
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
        method: "POST",
      }
    );
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);

    if (response.ok && data.accessToken && data.refreshToken) {
      await setAuthCookies(data.accessToken, data.refreshToken);
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("로그인 중 알 수 없는 오류가 발생했습니다.");
  }
};
