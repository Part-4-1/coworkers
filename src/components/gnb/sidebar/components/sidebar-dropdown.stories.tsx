import type { Meta, StoryObj } from "@storybook/react";
import SidebarDropdown from "./sidebar-dropdown";
import { use, useState } from "react";

const meta: Meta<typeof SidebarDropdown> = {
  title: "components/SidebarDropdown",
  component: SidebarDropdown,
  tags: ["autodocs"],
  args: {
    isOpen: false,
    onToggle: () => alert("드롭다운 닫기"),
  },
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "드롭다운 열림 상태",
    },
    onToggle: {
      action: "onClose",
      description: "드롭다운 닫기 함수",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
};

type Story = StoryObj<typeof SidebarDropdown>;

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);

    return (
      <SidebarDropdown
        {...args}
        isOpen={isOpen}
        onToggle={() => setIsOpen(!isOpen)}
      />
    );
  },
  args: {
    isOpen: false,
  },
};

export const InitialOpen: Story = {
  ...Default,
  args: {
    isOpen: true,
  },
};

export default meta;
