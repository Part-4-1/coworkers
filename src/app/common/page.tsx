"use client";

import { useForm } from "react-hook-form";
import { TextInput, Reply } from "@/components/index";
import { mockComments } from "@/mocks/comment-data";
import {
  EMAIL_REGEX,
  PASSWORD_REGEX,
  PASSWORD_MIN_LENGTH,
} from "@/constants/regex";
import Button from "@/components/button/button";
import { Icon } from "@/components";
import TodoHeader from "@/components/todo-header/todo-header";

type LoginFormData = {
  email: string;
  password: string;
};

{
  /** 공통 컴포넌트 개발간 사용할 테스트 페이지. */
}
const Page = () => {
  const singleComment = mockComments[0];
  const {
    register,
    formState: { errors },
  } = useForm<LoginFormData>({
    mode: "onBlur",
    defaultValues: { email: "", password: "" },
  });

  return (
    <div className="mt-10 w-full gap-4 flex-col-center">
      <form className="mt-10 w-full gap-4 flex-col-center">
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
      <Reply comment={singleComment} />
      <div className="w-[300px] gap-2 flex-col-center">
        <Button>생성하기</Button>
        <Button variant="outlined">생성하기</Button>
        <Button variant="outlined-secondary">생성하기</Button>
        <Button variant="alert">삭제하기</Button>
        <Button
          variant="outlined"
          className="w-fit rounded-lg px-3 py-2 text-md"
        >
          생성하기
        </Button>
        <Button className="w-fit rounded-[40px] pl-[16px] pr-5 text-md">
          <Icon icon="checkInverse" width={16} height={16} />
          완료 취소하기
        </Button>
        <Button variant="none" className="h-8 w-8 rounded-full bg-gray-300">
          <Icon icon="smallPencil" width={12} height={16} />
        </Button>
        <Button variant="outlined" size="sm">
          {/* <Icon icon="check" width={16} height={16} /> */}
          변경하기
        </Button>
      </div>

      <div className="w-[300px]">
        <TodoHeader
          btnClick={() => {
            alert("버튼 클릭");
          }}
          todoName="할 일"
        />
      </div>
    </div>
  );
};

export default Page;
