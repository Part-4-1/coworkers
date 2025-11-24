"use client";

import { useState } from "react";
import TextInput from "../input-components/text-input";
import Button from "../button/button";
import Icon from "../icon/Icon";

interface PatchPasswordModalUIProps {
  handleClick: (password: string, passwordConfirmation: string) => void;
  handleClose: () => void;
}

const PatchPasswordModalUI = ({
  handleClick,
  handleClose,
}: PatchPasswordModalUIProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  return (
    <div className="flex w-full flex-col items-center gap-6 px-[31.5px] pt-6">
      <div className="flex w-full flex-col items-center gap-4">
        <p>비밀번호 변경하기</p>
        <div className="flex w-full flex-col items-start gap-4">
          <div className="flex w-full flex-col items-start gap-2">
            <label htmlFor="NewPassword">새 비밀번호</label>
            <TextInput
              id="NextPassword"
              type={showPassword ? "text" : "password"}
              placeholder="새 비밀번호를 입력해주세요."
              className="tablet:w-[280px]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              rightIcon={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="cursor-pointer"
                >
                  <Icon
                    icon={showPassword ? "visible" : "invisible"}
                    className="h-6 w-6 text-gray-600"
                  />
                </button>
              }
            />
          </div>
          <div className="flex w-full flex-col items-start gap-2">
            <label htmlFor="CheckNewPassword">새 비밀번호 확인</label>
            <TextInput
              id="CheckNextPassword"
              type={showPassword ? "text" : "password"}
              placeholder="다시 한 번 입력해주세요."
              className="tablet:w-[280px]"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              rightIcon={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="cursor-pointer"
                >
                  <Icon
                    icon={showPassword ? "visible" : "invisible"}
                    className="h-6 w-6 text-gray-600"
                  />
                </button>
              }
            />
          </div>
        </div>
      </div>
      <div className="flex w-full items-start gap-2">
        <Button onClick={handleClose} variant="outlined">
          닫기
        </Button>
        <Button onClick={() => handleClick(password, passwordConfirmation)}>
          변경하기
        </Button>
      </div>
    </div>
  );
};

export default PatchPasswordModalUI;
