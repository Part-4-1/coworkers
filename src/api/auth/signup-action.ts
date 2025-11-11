"use server";
import type { User } from "@/types/user";

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

    if (!response.ok)
      throw new Error(data.message || "회원가입에 실패하였습니다.");

    return data;
  } catch (error) {
    throw error;
  }
};
