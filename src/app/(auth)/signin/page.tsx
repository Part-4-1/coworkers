"use client";

import React, { useEffect, useState } from "react";
import SingUpInFormWrapper from "../_components/form_wrapper";
import { Button, Icon, TextInput, LoadingSpinner } from "@/components";
import { EMAIL_REGEX, PASSWORD_MIN_LENGTH } from "@/constants/regex";
import { SignupRequest } from "@/api/auth/signup-action";
import { useForm } from "react-hook-form";
import Link from "next/link";
import SimpleSignUpIn from "../_components/simple-signUpIn";
import { getCookie } from "@/utils/cookie-utils";
import { useSigninQuery } from "@/hooks/auth/use-signin-query";
import { SignInRequest } from "@/api/auth/signin-action";
import { useRouter } from "next/navigation";
import usePrompt from "@/hooks/use-prompt";
import PasswordRestModal from "../_components/password-reset-modal";

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const accessToken = getCookie("accessToken");
  const { Modal, openPrompt, closePrompt } = usePrompt();
  const { mutate, isPending } = useSigninQuery();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<SignupRequest>({
    mode: "all",
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = (formData: SignInRequest) => {
    mutate({
      email: formData.email,
      password: formData.password,
    });
  };

  useEffect(() => {
    if (accessToken) {
      router.push("/");
    }
  }, [accessToken]);

  return (
    <>
      <SingUpInFormWrapper>
        <div className="gap-16 flex-col-center">
          <h1 className="text-2xl font-bold text-blue-700">로그인</h1>
          <form
            className="flex w-full flex-col gap-6"
            onSubmit={handleSubmit(onSubmit)}
            aria-label="Login Form"
          >
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
                    aria-label={
                      showPassword ? "show password" : "hide password"
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
                  minLength: {
                    value: PASSWORD_MIN_LENGTH,
                    message: "",
                  },
                })}
              />
              <div className="flex cursor-pointer justify-end text-lg text-blue-200 underline hover:text-blue-100">
                <Button
                  type="button"
                  onClick={openPrompt}
                  variant="none"
                  aria-label="Forget Password?"
                  className="font-medium"
                >
                  비밀번호를 잊으셨나요?
                </Button>
              </div>
            </div>
            <Button
              className="mt-4"
              type="submit"
              disabled={!isValid || isPending}
              aria-label="Login"
            >
              {isPending ? <LoadingSpinner /> : "로그인"}
            </Button>
            <div className="gap-3 flex-center">
              <p className="flex justify-end text-lg font-medium text-blue-700">
                아직 계정이 없으신가요?
              </p>
              <Link
                href={"/signup"}
                className="flex cursor-pointer justify-end text-lg font-medium text-blue-200 underline hover:text-blue-100"
                aria-label="Signup"
              >
                가입하기
              </Link>
            </div>
          </form>
        </div>
        <SimpleSignUpIn />
      </SingUpInFormWrapper>
      <Modal>
        <PasswordRestModal closePrompt={closePrompt} />
      </Modal>
    </>
  );
};

export default Page;
