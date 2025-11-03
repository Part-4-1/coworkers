import { Meta, StoryObj } from "@storybook/nextjs";
import Button from "./button";

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "공통으로 사용되는 버튼 컴포넌트입니다.",
      },
    },
  },
  title: "Components/Button",
  tags: ["autodocs"],
  args: {
    variant: "solid",
    className: "w-[300px]",
    disabled: false,
  },
  argTypes: {
    className: {
      description: "추가 스타일을 부여하기 위해 사용",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    children: "생성하기",
  },
};

export const SolidDisabled: Story = {
  args: {
    children: "생성하기",
    disabled: true,
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: "생성하기",
  },
};

export const OutlinedDisabled: Story = {
  args: {
    variant: "outlined",
    children: "생성하기",
    disabled: true,
  },
};

export const OutlinedSecondary: Story = {
  args: {
    variant: "outlined-secondary",
    children: "생성하기",
  },
};

export const Alert: Story = {
  args: {
    variant: "alert",
    children: "삭제하기",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "변경하기",
    className: "",
  },
};
