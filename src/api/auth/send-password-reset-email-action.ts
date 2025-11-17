"use server";

export interface passwordReset {
  email: string;
  redirectUrl: string;
}

export const sendPasswordResetEmailAction = async ({
  email,
  redirectUrl,
}: passwordReset) => {
  console.log(email, redirectUrl);
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/send-reset-password-email`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          redirectUrl,
        }),
      }
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "비밀번호 재설정 링크 전송에 실패했습니다."
      );
    }
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("알 수 없는 오류 발생");
  }
};
