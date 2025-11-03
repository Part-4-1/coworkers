"use client";

import { useForm } from "react-hook-form";
import TextInput from "@/components/input-components/text-input";
import {
  EMAIL_REGEX,
  PASSWORD_REGEX,
  PASSWORD_MIN_LENGTH,
} from "@/constants/regex";

type LoginFormData = {
  email: string;
  password: string;
};

{
  /** 공통 컴포넌트 개발간 사용할 테스트 페이지. */
}
const Page = () => {
  const {
    register,
    formState: { errors },
  } = useForm<LoginFormData>({
    mode: "onBlur",
    defaultValues: { email: "", password: "" },
  });

  return (
    <form className="mt-10 w-full flex-col gap-4 flex-center">
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

      <TextInput
        id="password"
        type="password"
        placeholder="비밀번호를 입력하세요."
        errorMessage={errors.password?.message}
        {...register("password", {
          required: "비밀번호를 입력해주세요.",
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

      <TextInput
        id="email-readonly"
        type="email"
        value="user@example.com"
        readOnly
      />

      <TextInput
        id="password-readonly"
        type="password"
        value="********"
        readOnly
        /* TODO(준열) : 아이콘 컴포넌트 및 버튼 컴포넌트 완성시 수정 예정 */
        suffix={
          <button
            type="button"
            className="h-[33px] w-[74px] rounded-lg bg-blue-200 text-md font-medium text-white"
          >
            변경하기
          </button>
        }
      />
    </form>
  );
};

export default Page;
