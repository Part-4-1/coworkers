import type { Meta, StoryObj } from "@storybook/react";
import { InputReply } from "../index";

const meta = {
  title: "Components/InputReply",
  component: InputReply,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="min-h-screen flex-center">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof InputReply>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <InputReply />,
};
