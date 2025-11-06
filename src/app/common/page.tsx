"use client";

import {
  Badge,
  Button,
  Dropdown,
  Icon,
  InputBox,
  InputReply,
  Profile,
  Reply,
  TextInput,
  TaskChip,
  TaskHeader,
} from "@/components/index";
import {
  EMAIL_REGEX,
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
} from "@/constants/regex";

import { mockComments } from "@/mocks/comment-data";
import { mockUserData } from "@/mocks/user-data";
import { useState } from "react";
import { useForm } from "react-hook-form";

type LoginFormData = {
  email: string;
  password: string;
};

{
  /** 공통 컴포넌트 개발간 사용할 테스트 페이지. */
}
const Page = () => {
  const [showPassword, setShowPassword] = useState(false);

  const singleComment = mockComments[0];
  const {
    register,
    formState: { errors },
  } = useForm<LoginFormData>({
    mode: "onBlur",
    defaultValues: { email: "", password: "" },
  });

  return (
    <div className="mb-[300px] mt-10 w-full gap-4 flex-col-center">
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
          type={showPassword ? "text" : "password"}
          placeholder="비밀번호를 입력하세요."
          errorMessage={errors.password?.message}
          suffixClassName="pr-2"
          suffix={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              <Icon
                icon={showPassword ? "visible" : "invisible"}
                className="h-6 w-6 text-gray-800"
              />
            </button>
          }
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
          suffix={<Button size="sm">변경하기</Button>}
        />
      </form>
      <Reply comment={singleComment} />
      <InputReply />
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
          <Icon icon="checkInverse" className="h-4 w-4" />
          완료 취소하기
        </Button>
        <Button variant="none" className="h-8 w-8 rounded-full bg-gray-300">
          <Icon icon="smallPencil" className="h-4 w-3" />
        </Button>
        <Button variant="outlined" size="sm">
          {/* <Icon icon="check" width={16} height={16} /> */}
          변경하기
        </Button>
      </div>
      <div className="flex gap-5">
        <Profile></Profile>
        <Profile image={mockUserData[0].image}></Profile>
        <Profile size="md"></Profile>
        <Profile image={mockUserData[1].image} size="md"></Profile>
        <Profile size="sm"></Profile>
        <Profile image={mockUserData[2].image} size="sm"></Profile>
        <Profile size="lg"></Profile>
        <Profile image={mockUserData[2].image} size="lg"></Profile>
      </div>
      <div className="flex gap-5">
        <Dropdown
          items={[
            { label: "법인 등기", addon: <Badge total={5} completed={3} /> },
            { label: "법인 설립", addon: <Badge total={5} completed={5} /> },
            { label: "정기 주총", addon: <Badge total={10} completed={2} /> },
          ]}
          isWidthFull
          defaultTriggerClassName="w-[241px] h-[54px] font-medium"
        />
        <Dropdown
          items={[{ label: "최신순" }, { label: "좋아요 많은순" }]}
          isWidthFull={true}
          defaultTriggerClassName="w-[130px] h-[48px]"
        ></Dropdown>
        <Dropdown
          trigger={<Profile></Profile>}
          items={[
            { label: "마이 히스토리" },
            { label: "계정 설정" },
            { label: "팀 참여" },
            { label: "로그아웃" },
          ]}
          isWidthFull={false}
        />
      </div>
      <div className="w-[300px]">
        <TaskHeader
          btnClick={() => {
            alert("버튼 클릭");
          }}
          todoName="할 일"
        />
      </div>
      <InputBox
        placeholder="메모를 입력해주세요."
        width="w-full max-w-[336px]"
      />
      <InputBox placeholder="내용을 입력하세요" width="w-full max-w-[336px]" />
      <div className="flex gap-2 bg-slate-600 px-4 py-4">
        <Badge total={0} completed={0} />
        <Badge total={5} completed={3} />
        <Badge total={5} completed={5} />
      </div>
      <div className="flex gap-2 bg-slate-600 px-4 py-4">
        <Badge total={0} completed={0} size="lg" className="bg-gray-300" />
        <Badge total={5} completed={3} size="lg" />
        <Badge total={5} completed={5} size="lg" />
      </div>
      <div className="w-[300px]">
        <TaskChip
          id="task-1"
          radioName="task"
          taskName="오늘 할 일"
          count={5}
        />
        <TaskChip id="task-2" radioName="task" taskName="진행 중" count={2} />
      </div>
    </div>
  );
};

export default Page;
