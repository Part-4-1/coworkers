import type { Meta, StoryObj } from "@storybook/react";
import TaskCard from "./task-card";

const meta = {
  title: "Components/TaskCard",
  component: TaskCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    taskTitle: { control: "text" },
    total: { control: "number" },
    completed: { control: "number" },
    taskList: { control: "object" },
  },
} satisfies Meta<typeof TaskCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    taskListId: 3290,
    taskTitle: "법인 설립",
    total: 5,
    completed: 2,
  },
};

export const HasTaskList: Story = {
  args: {
    taskListId: 3290,
    taskTitle: "법인 설립",
    total: 5,
    completed: 2,
    taskList: [
      { id: 12345, taskName: "법인 설립 안내 드리기", isDone: null },
      {
        id: 12346,
        taskName: "법인 설립 안내 드리기2",
        isDone: "2025-11-07T00:00:00Z",
      },
    ],
  },
};
