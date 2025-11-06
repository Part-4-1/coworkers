import type { Meta, StoryObj } from "@storybook/react";
import { TaskChip } from "../index";

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
    count: { description: "할 일이 완료된 개수" },
  },
} satisfies Meta<typeof TaskChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "task-1",
    radioName: "task",
    taskName: "할 일",
    count: 3,
  },
};

export const Tasks: Story = {
  args: { id: "task-1", radioName: "task", taskName: "할 일", count: 3 },
  render: () => (
    <div className="w-[200px] space-y-4">
      <TaskChip id="task-1" radioName="task" taskName="할 일" count={5} />
      <TaskChip id="task-2" radioName="task" taskName="진행 중" count={2} />
      <TaskChip id="task-3" radioName="task" taskName="완료됨" count={8} />
    </div>
  ),
};
