import type { Meta, StoryObj } from "@storybook/react";
import Badge from "./badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    total: { control: "number", description: "총 할 일 개수" },
    completed: { control: "number", description: "완료한 할 일 개수" },
    size: {
      control: { type: "select", options: [undefined, "lg"] },
      description: "배지 크기 (기본값: 없음, 'lg': 큰 크기)",
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    total: 5,
    completed: 3,
  },
};

export const Empty: Story = {
  args: {
    total: 0,
    completed: 0,
  },
};

export const Completed: Story = {
  args: {
    total: 5,
    completed: 5,
  },
};

export const LargeDefault: Story = {
  args: {
    total: 5,
    completed: 3,
    size: "lg",
  },
};

export const LargeEmpty: Story = {
  args: {
    total: 0,
    completed: 0,
    size: "lg",
  },
};

export const LargeCompleted: Story = {
  args: {
    total: 5,
    completed: 5,
    size: "lg",
  },
};
