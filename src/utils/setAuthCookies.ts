"use server";

import { cookies } from "next/headers";

export const setAuthCookies = async (
  accessToken: string,
  refreshToken: string
) => {
  const cookieStore = await cookies();

  cookieStore.set("accessToken", accessToken, {
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });

  cookieStore.set("refreshToken", refreshToken, {
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });
};
