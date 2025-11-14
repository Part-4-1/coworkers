// src/components/input-reply/input-reply.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import InputReply from "./input-reply";

const meta = {
  title: "Components/InputReply",
  component: InputReply,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: "text",
      description: "입력창 placeholder 텍스트",
    },
    disabled: {
      control: "boolean",
      description: "사용자가 댓글을 전송시 댓글창 클릭을 막기위한 값",
    },
    onSubmit: {
      action: "submitted",
      description: "댓글 제출 시 호출되는 함수",
    },
  },
} satisfies Meta<typeof InputReply>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: (comment: string) => alert(comment),
    placeholder: "댓글을 달아주세요",
    disabled: false,
  },
};
