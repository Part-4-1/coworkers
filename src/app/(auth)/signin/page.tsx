"use client";

import React, { useState } from "react";
import SingUpInFormWrapper from "../_components/form_wrapper";
import { Button, Icon, TextInput } from "@/components";
import {
  EMAIL_REGEX,
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
} from "@/constants/regex";
import { SignupRequest } from "@/api/auth/signup-action";
import { useForm } from "react-hook-form";

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    formState: { errors, isValid },
    getValues,
    handleSubmit,
  } = useForm<SignupRequest>({
    mode: "onBlur",
    defaultValues: { email: "", password: "" },
  });

  return (
    <SingUpInFormWrapper>
      <div className="gap-16 flex-col-center">
        <h1 className="text-2xl font-bold text-blue-700">로그인</h1>
        <form className="flex w-full flex-col gap-6" aria-label="로그인 폼">
          <div className="flex flex-col gap-3">
            <label htmlFor="email">이메일</label>
            <TextInput
              id="email"
              type="email"
              placeholder="이메일을 입력하세요."
              errorMessage={errors.email?.message}
              {...register("email", {
                required: "이메일을 입력해주세요.",
                pattern: {
                  value: EMAIL_REGEX,
                  message: "이메일 형식이 올바르지 않습니다.",
                },
              })}
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="password">비밀번호</label>
            <TextInput
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="비밀번호를 입력하세요."
              errorMessage={errors.password?.message}
              suffixClassName="pr-2"
              suffix={
                <Button
                  aria-label={
                    showPassword ? "비밀번호 숨기기" : "비밀번호 표시"
                  }
                  type="button"
                  variant="none"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <Icon
                    icon={showPassword ? "visible" : "invisible"}
                    className="h-6 w-6 text-gray-800"
                  />
                </Button>
              }
              {...register("password", {
                required: "비밀번호를 입력해주세요.",
              })}
            />
            <p className="flex cursor-pointer justify-end text-lg font-medium text-blue-200 underline hover:text-blue-100">
              비밀번호를 잊으셨나요?
            </p>
          </div>
          <Button className="mt-4" type="submit" disabled={!isValid}>
            로그인
          </Button>
          <div className="gap-3 flex-center">
            <p className="flex justify-end text-lg font-medium text-blue-700">
              아직 계정이 없으신가요?
            </p>
            <span className="flex cursor-pointer justify-end text-lg font-medium text-blue-200 underline hover:text-blue-100">
              가입하기
            </span>
          </div>
        </form>
      </div>
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
    </SingUpInFormWrapper>
  );
};

export default Page;
