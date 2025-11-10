import { Meta, StoryObj } from "@storybook/nextjs";
import CalendarTime from "./calendar-time";

const meta: Meta<typeof CalendarTime> = {
  component: CalendarTime,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "시간을 선택하는 캘린더 입니다.",
      },
    },
  },
  title: "Components/CalendarTime",
  tags: ["autodocs"],
  args: {},
  argTypes: {
    onSelect: {
      description: "선택된 시간 데이터를 상위로 전달하는 콜백 함수",
    },
    initialTimeData: {
      description:
        "상위에서 내려받은 선택된 시간 데이터 (isAm, time), 시간선택 캘린더가 부모에서 닫혔다가 열릴때 선택된 값을 유지하기 위한 Props입니다.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const initialTimeData: Story = {
  args: {
    initialTimeData: {
      isAm: true,
      time: "1:00",
    },
  },
};
