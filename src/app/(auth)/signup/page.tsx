"use client";

import React, { useEffect, useState } from "react";
import SingUpInFormWrapper from "../_components/form_wrapper";
import { useForm } from "react-hook-form";
import {
  EMAIL_REGEX,
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
} from "@/constants/regex";
import { Button, Icon, TextInput, LoadingSpinner } from "@/components";
import { useSignupQuery } from "@/hooks/auth/use-signup-query";
import type { SignupRequest } from "@/api/auth/signup-action";
import { useRouter } from "next/navigation";
import { getCookie } from "@/utils/cookie-utils";
import SimpleSignUpIn from "../_components/simple-signUpIn";

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const {
    register,
    formState: { errors, isValid },
    getValues,
    handleSubmit,
  } = useForm<SignupRequest>({
    mode: "all",
    defaultValues: { email: "", password: "" },
  });
  const accessToken = getCookie("accessToken");

  const { mutate, isPending } = useSignupQuery();

  const onSubmit = (formData: SignupRequest) => {
    mutate({
      nickname: formData.nickname,
      email: formData.email,
      password: formData.password,
      passwordConfirmation: formData.passwordConfirmation,
    });
  };

  useEffect(() => {
    if (accessToken) {
      router.push("/");
    }
  }, [accessToken]);

  return (
    <SingUpInFormWrapper>
      <div className="gap-16 flex-col-center">
        <h1 className="text-2xl font-bold text-blue-700">회원가입</h1>
        <form
          className="flex w-full flex-col gap-6"
          onSubmit={handleSubmit(onSubmit)}
          aria-label="Signup Form"
        >
          <div className="flex flex-col gap-3">
            <label htmlFor="nickname">닉네임</label>
            <TextInput
              id="nickname"
              type="text"
              placeholder="닉네임을 입력해주세요."
              errorMessage={errors.nickname?.message}
              {...register("nickname", {
                required: "닉네임을 입력해주세요.",
              })}
            />
          </div>
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
              rightIconClassName="pr-2"
              rightIcon={
                <Button
                  aria-label={showPassword ? "show password" : "hide password"}
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
                validate: {
                  complexityCheck: (value) =>
                    (/[0-9]/.test(value) && /[!@#$%^&*]/.test(value)) ||
                    "비밀번호에 숫자, 특수문자(!@#$%^&*)가 각각 하나 이상 포함되어야 합니다.",
                },
                pattern: {
                  value: PASSWORD_REGEX,
                  message: "영문, 숫자, !@#$%^&*만 사용할 수 있습니다.",
                },
                minLength: {
                  value: PASSWORD_MIN_LENGTH,
                  message: "비밀번호는 최소 8자 이상입니다.",
                },
              })}
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="passwordConfirmation">비밀번호 확인</label>
            <TextInput
              id="passwordConfirmation"
              type={showPassword ? "text" : "password"}
              placeholder="비밀번호를 다시 한 번 입력하세요."
              errorMessage={errors.passwordConfirmation?.message}
              rightIconClassName="pr-2"
              rightIcon={
                <Button
                  aria-label={showPassword ? "show password" : "hide password"}
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
              {...register("passwordConfirmation", {
                required: "비밀번호를 입력해주세요.",
                validate: () =>
                  getValues("password") === getValues("passwordConfirmation") ||
                  "비밀번호가 일치하지 않습니다.",
              })}
            />
          </div>
          <Button
            className="mt-4"
            type="submit"
            disabled={!isValid || isPending}
            aria-label="Signup"
          >
            {isPending ? <LoadingSpinner /> : "회원가입"}
          </Button>
        </form>
      </div>
      <SimpleSignUpIn />
    </SingUpInFormWrapper>
  );
};

export default Page;
