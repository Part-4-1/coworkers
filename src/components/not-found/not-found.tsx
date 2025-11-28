"use client";

import Link from "next/link";
import { Button } from "@/components/index";
import LottieAnimation from "@/components/lottie/LottieAnimation";
import notfound from "@/../public/animations/404-not-found.json";

const NotFoundView = () => {
  return (
    <div className="min-h-screen gap-2 px-4 flex-col-center">
      <LottieAnimation
        animationData={notfound}
        className="h-[300px] w-full max-w-[400px] tablet:h-[400px]"
        aria-label="404 페이지를 찾을 수 없음"
      />
      <h1 className="mt-2 text-lg font-semibold text-gray-800">
        요청하신 페이지를 찾을 수 없습니다.
      </h1>
      <p className="mt-2 text-lg font-semibold text-gray-800">
        경로가 변경되었거나 존재하지 않는 주소입니다.
      </p>
      <Link href="/" className="mt-4 w-full max-w-[300px]">
        <Button variant="solid" size="lg">
          홈으로 돌아가기
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundView;
