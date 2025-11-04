import type { Meta, StoryObj } from "@storybook/react";
import SidebarMenu from "./sidebar-menu";

const MockIcon = ({ width, height, className }: any) => {
  return (
    <div
      style={{
        width: width || 20,
        height: height || 20,
        backgroundColor: "#999",
        borderRadius: "12px",
      }}
      className={className}
    />
  );
};

const meta = {
  title: "components/SidebarMenu",
  component: SidebarMenu,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "onClick" },
  },
  args: {
    iconName: "chess",
    onClick: () => {
      console.log("사이드바 메뉴 클릭");
    },
  },
} satisfies Meta<typeof SidebarMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "기본 메뉴",
    isSelected: false,
  },
};

export const Selected: Story = {
  args: {
    title: "선택된 메뉴",
    isSelected: true,
  },
};
