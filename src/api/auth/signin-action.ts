"use server";

import { User } from "@/types/user";
import { cookies } from "next/headers";

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

    if (response.ok && data.accessToken && data.refreshToken) {
      const cookieStore = await cookies();

      cookieStore.set("accessToken", data.accessToken, {
        secure: process.env.NODE_ENV === "production",
        path: "/",
      });

      cookieStore.set("refreshToken", data.refreshToken, {
        secure: process.env.NODE_ENV === "production",
        path: "/",
      });
    }

    if (!response.ok) throw new Error(data.message || "로그인에 실패했습니다.");

    return data;
  } catch (error) {
    throw error;
  }
};
