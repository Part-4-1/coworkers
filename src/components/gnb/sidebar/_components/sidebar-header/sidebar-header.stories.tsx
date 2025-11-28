import type { Meta, StoryObj } from "@storybook/react";
import SidebarHeader from "./sidebar-header";
import { useState } from "react";

const meta = {
  title: "components/SidebarHeader",
  component: SidebarHeader,
  tags: ["autodocs"],

  args: {
    setIsSidebarOpen: () => console.log("상태 변경"),
  },
} satisfies Meta<typeof SidebarHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Open: Story = {
  args: {
    isSidebarOpen: true,
  },
};

export const Closed: Story = {
  args: {
    isSidebarOpen: false,
  },
  render(args) {
    return (
      <div className="w-[75px] border-r">
        <SidebarHeader {...args} />
      </div>
    );
  },
};

export const Interactive: Story = {
  args: {
    isSidebarOpen: true,
  },

  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.isSidebarOpen);

    return (
      <div
        className={`h-36 border-r border-gray-200 transition-all duration-300 ease-in-out ${
          isOpen ? "w-[270px]" : "w-[75px]"
        }`}
      >
        <SidebarHeader
          {...args}
          isSidebarOpen={isOpen}
          setIsSidebarOpen={setIsOpen}
        />
        <div className="p-4 text-sm text-gray-500">
          현재 상태: {isOpen ? "열림" : "닫힘"}
        </div>
      </div>
    );
  },
};
