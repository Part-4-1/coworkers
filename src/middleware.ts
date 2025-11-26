import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
  const accessToken = request.cookies.get("accessToken");
  const { pathname } = request.nextUrl;

  if (
    (pathname === "/signin" ||
      pathname === "/signup" ||
      pathname === "/reset-password") &&
    accessToken
  ) {
    return NextResponse.redirect(new URL("/mypage", request.nextUrl));
  }

  if (
    (pathname === "/mypage" ||
      pathname === "/myhistory" ||
      pathname.startsWith("/boards") ||
      pathname === "/taketeam") &&
    !accessToken
  ) {
    return NextResponse.redirect(new URL("/signin", request.nextUrl));
  }

  return NextResponse.next();
};

export const config = {
  matcher: [
    "/signin",
    "/signup",
    "/reset-password",
    "/mypage",
    "/myhistory",
    "/boards/:path*",
    "/taketeam",
  ],
};
