import type { Meta, StoryObj } from "@storybook/nextjs";
import { Provider } from "jotai";
import Toast from "./toast";

const meta = {
  title: "Components/Toast",
  component: Toast,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["success", "error", "warning"],
      description: "토스트 타입",
    },
    message: {
      control: "text",
      description: "토스트 메시지",
    },
  },
  decorators: [
    (Story) => (
      <Provider>
        <Story />
      </Provider>
    ),
  ],
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  render: (args) => <Toast {...args} />,
  args: {
    type: "success",
    message: "성공 메시지",
  },
};

export const Error: Story = {
  render: (args) => <Toast {...args} />,
  args: {
    type: "error",
    message: "오류 메시지",
  },
};

export const Warning: Story = {
  render: (args) => <Toast {...args} />,
  args: {
    type: "warning",
    message: "경고 메시지",
  },
};
