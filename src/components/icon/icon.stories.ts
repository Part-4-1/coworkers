import { Meta, StoryObj } from "@storybook/nextjs";
import Icon from "./Icon";
import ICONS_MAP from "./icons-map";

const meta: Meta<typeof Icon> = {
  component: Icon,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "공통으로 사용되는 아이콘 컴포넌트입니다.",
      },
    },
  },
  title: "Components/Icon",
  tags: ["autodocs"],
  args: {
    icon: "alert",
    className: "w-4 h-4",
  },
  argTypes: {
    icon: {
      control: "select",
      icon: Object.keys(ICONS_MAP),
      description: "표시할 아이콘",
    },
    className: {
      description: "아이콘 사이즈 조절 및 추가 스타일을 부여하기 위해 사용",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
