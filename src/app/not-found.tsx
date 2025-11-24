"use client";

import Link from "next/link";
import LottieAnimation from "@/components/lottie/LottieAnimation";
import notfound from "@/../public/animations/404-not-found.json";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <LottieAnimation
        animationData={notfound}
        className="h-[300px] w-full max-w-[400px] md:h-[400px]"
        aria-label="404 페이지를 찾을 수 없음"
      />
      <h1 className="mt-4 text-center text-2xl font-bold">
        페이지를 찾을 수 없습니다
      </h1>
      <p className="mt-2 text-center text-gray-600">
        요청하신 페이지가 존재하지 않습니다.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
};

export default NotFound;
