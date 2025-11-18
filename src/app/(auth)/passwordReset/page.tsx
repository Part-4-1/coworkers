"use client";

import React, { useState } from "react";
import SingUpInFormWrapper from "../_components/form_wrapper";
import { Button, Icon, TextInput } from "@/components";
import { useForm } from "react-hook-form";
import { PASSWORD_MIN_LENGTH, PASSWORD_REGEX } from "@/constants/regex";

interface passwordRestType {
  passwordConfirmation: string;
  password: string;
  token: string;
}

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    formState: { errors, isValid },
    getValues,
  } = useForm<passwordRestType>({ mode: "all" });

  return (
    <SingUpInFormWrapper>
      <div className="gap-16 flex-col-center">
        <h1 className="text-2xl font-bold text-blue-700">비밀번호 재설정</h1>
        <form className="flex w-full flex-col gap-6" aria-label="Login Form">
          <div className="flex flex-col gap-3">
            <label htmlFor="password">새 비밀번호</label>
            <TextInput
              id="password"
              placeholder="새 비밀번호를 입력해주세요"
              type={showPassword ? "text" : "password"}
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
            <label htmlFor="passwordConfirmation"></label>
            <TextInput
              id="passwordConfirmation"
              placeholder="새 비밀번호를 다시 한 번 입력해주세요"
              type={showPassword ? "text" : "password"}
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
          <Button className="mt-4" type="submit" disabled={!isValid}>
            재설정
          </Button>
        </form>
      </div>
    </SingUpInFormWrapper>
  );
};

export default Page;
