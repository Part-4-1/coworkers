import { Meta, StoryObj } from "@storybook/nextjs";
import { InputBox } from "../index";

const meta = {
  title: "Components/InputBox",
  component: InputBox,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="bg-gray-50 p-8 flex-center">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof InputBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "메모를 입력해주세요.",
    width: "w-full max-w-[336px]",
    height: "h-[75px]",
  },
};

export const Large: Story = {
  args: {
    placeholder: "긴 텍스트 입력",
    width: "w-full max-w-[300px] tablet:max-w-[540px] pc:max-w-[760px]",
    height: "h-[200px] tablet:h-[240px] pc:h-[240px]",
  },
};
