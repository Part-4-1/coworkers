import { Meta, StoryObj } from "@storybook/nextjs";
import Calendar from "./calendar";

const meta: Meta<typeof Calendar> = {
  component: Calendar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "날짜를 선택하는 캘린더 입니다.",
      },
    },
  },
  title: "Components/Calendar",
  tags: ["autodocs"],
  args: {},
  argTypes: {
    onDayClick: {
      description: "날짜 클릭 시 실행되는 콜백 함수 (선택된 날짜를 반환)",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
