"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export const logoutAction = async () => {
  try {
    const cookieStore = await cookies();
    cookieStore.set("accessToken", "", {
      path: "/",
      secure: process.env.NODE_ENV === "production",
      maxAge: 0,
    });

    cookieStore.set("refreshToken", "", {
      path: "/",
      secure: process.env.NODE_ENV === "production",
      maxAge: 0,
    });
  } catch (error) {
    console.error("Logout error:", error);
    throw error;
  }

  redirect("/");
};
