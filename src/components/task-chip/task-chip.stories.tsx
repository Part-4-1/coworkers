import type { Meta, StoryObj } from "@storybook/react";
import TaskChip from "./task-chip";

const meta = {
  title: "Components/TaskChip",
  component: TaskChip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    id: { description: "각 태스크 칩의 고유 ID" },
    radioName: { description: "라디오 버튼 그룹 이름" },
    taskName: { description: "헤더에 표시될 텍스트 내용" },
  },
} satisfies Meta<typeof TaskChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "task",
    radioName: "task-default",
    taskName: "할 일",
  },
};

export const Tasks: Story = {
  args: { id: "task-2", radioName: "task-multi", taskName: "할 일" },
  render: () => (
    <div className="w-[200px] space-y-4">
      <TaskChip id="task-3" radioName="task-multi" taskName="할 일" />
      <TaskChip id="task-4" radioName="task-multi" taskName="진행 중" />
      <TaskChip id="task-5" radioName="task-multi" taskName="완료됨" />
    </div>
  ),
};
