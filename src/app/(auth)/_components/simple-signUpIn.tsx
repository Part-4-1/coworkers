import { Button, Icon } from "@/components";
import randomStringGenerator from "@/utils/random-string-generator";
import React from "react";

const SimpleSignUpIn = () => {
  const handleKakaoSignin = () => {
    const state = randomStringGenerator(10);
    const kakao_client_id = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
    const kakao_redirect_uri = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;
    const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${kakao_client_id}&redirect_uri=${kakao_redirect_uri}&response_type=code&state=${state}`;

    window.location.href = kakaoUrl;
  };

  return (
    <>
      <div className="mb-4 mt-12 flex w-full items-center gap-4">
        <div className="h-px flex-1 bg-gray-300"></div>
        <span className="text-gray-800">OR</span>
        <div className="h-px flex-1 bg-gray-300"></div>
      </div>
      <Button
        type="button"
        variant="none"
        aria-label="kakao login"
        onClick={handleKakaoSignin}
        className="flex h-12 w-full items-center justify-center rounded bg-kakao"
      >
        <Icon icon="kakao" className="h-[42px] w-[42px]" />
        <span className="text-lg font-medium text-gray-900">
          카카오로 계속하기
        </span>
      </Button>
    </>
  );
};

export default SimpleSignUpIn;
