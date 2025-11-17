"use client";

import { Button, TextInput } from "@/components";
import { EMAIL_REGEX } from "@/constants/regex";
import { useSendPasswordResetQuery } from "@/hooks/api/user/use-send-password-reset-email-action";
import React, { useState } from "react";

const PasswordResetModal = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isValid, setIsValid] = useState(false);
  const { mutate, isPending } = useSendPasswordResetQuery();

  const validateEmail = (emailValidation: string) => {
    if (!emailValidation) {
      setErrorMessage("이메일을 입력해주세요");
      setIsValid(false);
    } else if (!EMAIL_REGEX.test(emailValidation)) {
      setErrorMessage("이메일 형식이 올바르지 않습니다.");
      setIsValid(false);
    } else {
      setErrorMessage("");
      setIsValid(true);
    }
  };
  const handleSubmit = () => {
    if (isValid === false) {
      return;
    }
    const redirectUrl = `${window.location.origin}/passwordReset`;
    mutate({ email, redirectUrl });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };

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
        <TextInput
          id="reset-email"
          value={email}
          placeholder="이메일을 입력하세요."
          onChange={handleEmailChange}
          errorMessage={errorMessage}
        />
      </div>
      <div className="flex gap-2">
        {/* <Button type="button" variant="outlined">
          닫기
        </Button> */}
        <Button
          type="button"
          variant="solid"
          disabled={isPending || !isValid}
          onClick={handleSubmit}
          aria-label="send link"
        >
          {isPending ? "전송 중..." : "링크 보내기"}
        </Button>
      </div>
    </div>
  );
};

export default PasswordResetModal;
