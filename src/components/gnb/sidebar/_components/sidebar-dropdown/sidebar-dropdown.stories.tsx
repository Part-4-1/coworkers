import type { Meta, StoryObj } from "@storybook/react";
import SidebarDropdown from "./sidebar-dropdown";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const MOCK_USER_DATA = {
  id: 1,
  email: "test@example.com",
  nickname: "닉네임1",
  memberships: [
    {
      group: {
        id: 1,
        name: "코드잇 팀 (선택됨)",
      },
    },
    {
      group: {
        id: 2,
        name: "코워커스 팀",
      },
    },
    {
      group: {
        id: 3,
        name: "더줄게 팀",
      },
    },
  ],
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: Infinity,
    },
  },
});

const QUERY_KEY = ["userInfo"];
queryClient.setQueryData(QUERY_KEY, MOCK_USER_DATA);

const meta: Meta<typeof SidebarDropdown> = {
  title: "components/SidebarDropdown",
  component: SidebarDropdown,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <div className="h-[400px] w-[270px] border border-gray-200 p-4">
          <Story />
        </div>
      </QueryClientProvider>
    ),
  ],
  args: {
    isSidebarOpen: true,
    currentTeamId: "1",
    setIsOpen: () => console.log("사이드바 열림"),
    onToggle: () => console.log("드롭다운 열림"),
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof SidebarDropdown>;

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);

    const handleToggle = () => {
      setIsOpen(!isOpen);
      args.onToggle?.();
    };

    return (
      <SidebarDropdown
        {...args}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onToggle={handleToggle}
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
    ...Default.args,
    isOpen: true,
  },
};

export const SidebarClosed: Story = {
  render: (args) => {
    return <SidebarDropdown {...args} />;
  },
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <div className="h-[400px] w-[73px] border border-gray-200 p-2">
          <Story />
        </div>
      </QueryClientProvider>
    ),
  ],
  args: {
    isSidebarOpen: false,
    isOpen: false,
    currentTeamId: "1",
  },
};
