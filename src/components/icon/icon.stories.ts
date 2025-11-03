import { Meta, StoryObj } from "@storybook/nextjs-vite";
import Icon from "./Icon";
import ICONS_MAP from "./icons-map";

type IconKeys = keyof typeof ICONS_MAP;

const meta: Meta<typeof Icon> = {
  component: Icon,
  parameters: {
    layout: "centered",
  },
  title: "Component/Icon",
  tags: ["autodocs"],
  args: {
    icon: "alert",
    width: 16,
    height: 16,
    className: "",
  },
  argTypes: {
    icon: {
      control: "select",
      icon: Object.keys(ICONS_MAP),
      description: "표시할 아이콘",
    },
    width: {
      description: "아이콘 가로 길이",
    },
    height: {
      description: "아이콘 세로 길이",
    },
    className: {
      description: "추가 스타일을 부여하기 위해 사용",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
