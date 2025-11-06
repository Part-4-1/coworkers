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
