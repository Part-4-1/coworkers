import { Meta, StoryObj } from "@storybook/nextjs";
import TodoHeader from "./todo-header";

const meta: Meta<typeof TodoHeader> = {
  component: TodoHeader,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "공통으로 사용되는 할 일 추가 컴포넌트입니다.",
      },
    },
  },
  title: "Components/TodoHeader",
  tags: ["autodocs"],
  args: {
    children: "할 일",
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "할 일",
  },
};
