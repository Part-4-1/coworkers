import type { Meta, StoryObj } from "@storybook/react";
import TaskHeader from "./task-header";

const meta = {
  title: "Components/TaskHeader",
  component: TaskHeader,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    todoName: { description: "헤더에 표시될 텍스트 내용" },
  },
} satisfies Meta<typeof TaskHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    todoName: "할 일",
    btnClick: () => {
      alert("할 일 추가 버튼 클릭됨");
    },
  },
};

export const WithLongText: Story = {
  args: {
    todoName:
      "오늘 할 일 목록 - 매우 긴 텍스트 예시로서, 이 텍스트가 어떻게 잘리는지 확인하기 위한 용도입니다. 스크린 너비를 초과할 경우 어떻게 표시될까요? 이 텍스트는 의도적으로 길게 작성되었습니다.",
    btnClick: () => {
      alert("할 일 추가 버튼 클릭됨");
    },
  },
};
