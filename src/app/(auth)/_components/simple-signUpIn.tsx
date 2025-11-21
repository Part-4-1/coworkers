import { Button, Icon } from "@/components";
import React from "react";

const SimpleSignUpIn = () => {
  const client_id = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
  const redirect_uri = process.env.NEXT_PUBLIC_REDIRECT_URI;
  const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`;

  const handleKakaoSignin = () => {
    window.location.href = kakaoUrl;
  };

  return (
    <>
      <div className="mb-4 mt-12 flex w-full items-center gap-4">
        <div className="h-px flex-1 bg-gray-300"></div>
        <span className="text-gray-800">OR</span>
        <div className="h-px flex-1 bg-gray-300"></div>
      </div>
      <div className="flex justify-between">
        <span className="text-lg font-medium text-gray-800">
          간편 로그인하기
        </span>
        <Button
          variant="none"
          aria-label="kakao login"
          onClick={handleKakaoSignin}
        >
          <Icon icon="kakao" className="h-[42px] w-[42px]" />
        </Button>
      </div>
    </>
  );
};

export default SimpleSignUpIn;
