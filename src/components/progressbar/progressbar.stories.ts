import { Meta, StoryObj } from "@storybook/nextjs";
import Progressbar from "./progressbar";

const meta: Meta<typeof Progressbar> = {
  component: Progressbar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "진행도를 보여주는 Progressbar 입니다.",
      },
    },
  },
  title: "Components/Progressbar",
  tags: ["autodocs"],
  args: {},
  argTypes: {
    progressRate: {
      description: "진행 비율 수치 (0~100)",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Half: Story = {
  args: {
    progressRate: 50,
  },
};

export const Full: Story = {
  args: {
    progressRate: 100,
  },
};
