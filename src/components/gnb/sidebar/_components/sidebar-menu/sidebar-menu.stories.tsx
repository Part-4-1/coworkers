import type { Meta, StoryObj } from "@storybook/react";
import SidebarMenu from "./sidebar-menu";

const meta = {
  title: "components/SidebarMenu",
  component: SidebarMenu,
  tags: ["autodocs"],

  args: {
    iconName: "chess",
  },
  decorators: [
    (Story) => (
      <div className="h-[200px] bg-gray-50 p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SidebarMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "기본 메뉴",
    isSidebarOpen: true,
    isSelected: false,
    href: "/",
  },
  decorators: [
    (Story) => (
      <div className="w-[270px] border">
        <Story />
      </div>
    ),
  ],
};

export const Selected: Story = {
  args: {
    title: "선택된 메뉴",
    isSidebarOpen: true,
    isSelected: true,
    href: "/",
  },
  decorators: [
    (Story) => (
      <div className="w-[270px] border">
        <Story />
      </div>
    ),
  ],
};

export const Closed: Story = {
  args: {
    title: "닫힘",
    isSidebarOpen: false,
    isSelected: true,
    href: "/",
  },
  render: (args) => {
    return (
      <div className="w-[43px] border border-dashed border-gray-300">
        <SidebarMenu {...args} />
      </div>
    );
  },
};
