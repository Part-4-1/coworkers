"use server";

export interface resetPasswordTypes {
  passwordConfirmation: string;
  password: string;
  token: string;
}

export const resetPassword = async ({
  passwordConfirmation,
  password,
  token,
}: resetPasswordTypes) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/reset-password`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          passwordConfirmation,
          password,
          token,
        }),
      }
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error("비밀번호 변경에 실패했습니다.");
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("알 수 없는 오류 발생");
  }
};
