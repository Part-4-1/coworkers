import { Button, TextInput } from "@/components";
import React from "react";

const PasswordRestModal = () => {
  return (
    <div className="flex h-[260px] w-[384px] flex-col gap-6 px-[56px] pt-[48px]">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center gap-2">
          <span className="text-lg font-medium text-blue-700">
            비밀번호 재설정
          </span>
          <p className="text-md font-medium text-gray-700">
            비밀번호 재설정 링크를 보내드립니다.
          </p>
        </div>
        <TextInput id="1" placeholder="이메일을 입력하세요." />
      </div>
      <div className="flex gap-2">
        {/* <Button type="button" variant="outlined">
          닫기
        </Button> */}
        <Button type="button" variant="solid">
          링크 보내기
        </Button>
      </div>
    </div>
  );
};

export default PasswordRestModal;
