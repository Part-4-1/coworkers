import { Meta, StoryObj } from "@storybook/nextjs";
import TextInput from "./text-input";
import Button from "../button/button";

const meta: Meta<typeof TextInput> = {
  title: "Components/Input",
  component: TextInput,
  tags: ["autodocs"],
  args: {
    id: "example-input",
    placeholder: "이메일을 입력하세요.",
  },
  argTypes: {
    rightIcon: { control: false },
    leftIcon: { control: false },
  },
  decorators: [
    (Story) => (
      <div className="min-h-[500px] p-6 flex-col-center">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          "TextInput 컴포넌트는 기본적인 텍스트 입력을 위한 컴포넌트입니다.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  render: () => (
    <div className="flex w-full flex-col gap-4 pc:max-w-[460px]">
      <TextInput
        id="email-default"
        type="email"
        placeholder="이메일을 입력하세요."
        onChange={() => {}}
      />
      <TextInput
        id="password-default"
        type="password"
        placeholder="비밀번호를 입력하세요."
        onChange={() => {}}
      />
    </div>
  ),
};

export const Error: Story = {
  render: () => (
    <div className="flex w-full flex-col gap-4 pc:max-w-[460px]">
      <TextInput
        id="email-error"
        type="email"
        placeholder="이메일을 입력하세요."
        value="user"
        onChange={() => {}}
        errorMessage="이메일 형식이 올바르지 않습니다."
      />
      <TextInput
        id="password-error"
        type="password"
        placeholder="비밀번호를 입력하세요."
        value="1234"
        onChange={() => {}}
        errorMessage="비밀번호는 최소 8자 이상입니다."
      />
    </div>
  ),
};

export const ReadOnly: Story = {
  render: () => (
    <div className="flex w-full flex-col gap-4 pc:max-w-[460px]">
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
      />
    </div>
  ),
};

export const SuffixButton: Story = {
  render: () => (
    <div className="flex w-full flex-col gap-4 pc:max-w-[460px]">
      <TextInput
        id="email-suffix"
        type="email"
        value="user@example.com"
        readOnly
      />
      <TextInput
        id="password-suffix"
        type="password"
        value="********"
        readOnly
        rightIcon={<Button size="sm">변경하기</Button>}
      />
    </div>
  ),
};
