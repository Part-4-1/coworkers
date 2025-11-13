import { Button, Icon } from "@/components";
import React from "react";

const SimpleSignUpIn = () => {
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
        <Button variant="none">
          <Icon icon="kakao" className="h-[42px] w-[42px]" />
        </Button>
      </div>
    </>
  );
};

export default SimpleSignUpIn;
