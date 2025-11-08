import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./checkbox";
import { option } from "framer-motion/client";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    id: { control: "number", description: "체크박스 고유 ID" },
    taskName: { control: "text", description: "할 일 이름" },
    isDone: {
      control: "text",
      description: "할 일 완료 여부 (날짜 문자열 또는 null)",
    },
    size: {
      control: { type: "select", options: ["sm", "lg"] },
      description: "체크박스와 텍스트 크기",
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 1,
    taskName: "법인 등록 설명드리기",
    isDone: null,
  },
};

export const Done: Story = {
  args: {
    id: 2,
    taskName: "법인 등록 설명드리기",
    isDone: "2025-11-07T00:00:00Z",
  },
};

export const Small: Story = {
  args: {
    id: 2,
    taskName: "법인 등록 설명드리기",
    isDone: null,
    size: "sm",
  },
};

export const SmallDone: Story = {
  args: {
    id: 2,
    taskName: "법인 등록 설명드리기",
    isDone: "2025-11-07T00:00:00Z",
    size: "sm",
  },
};
