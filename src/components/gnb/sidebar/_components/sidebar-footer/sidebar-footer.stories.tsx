import type { Meta, StoryObj } from "@storybook/react";
import SidebarFooter from "./sidebar-footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const MOCK_USER_DATA = {
  id: 1,
  email: "test@example.com",
  nickname: "가상의 유저",
  image: "",
  memberships: [
    {
      group: {
        id: 1,
        name: "코드잇 팀",
      },
    },
    {
      group: {
        id: 2,
        name: "코워커스 팀",
      },
    },
  ],
};

const loggedInClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: Infinity,
    },
  },
});

const QUERY_KEY = ["userInfo"];

loggedInClient.setQueryData(QUERY_KEY, MOCK_USER_DATA);

const loggedOutClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const meta = {
  title: "components/SidebarFooter",
  component: SidebarFooter,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
  args: {
    currentTeamId: "1",
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof SidebarFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FooterOpenLoggedIn: Story = {
  args: {
    isSidebarOpen: true,
  },
  decorators: [
    (Story) => (
      <QueryClientProvider client={loggedInClient}>
        <div className="flex h-[200px] w-[270px] items-end justify-center border">
          <Story />
        </div>
      </QueryClientProvider>
    ),
  ],
};

export const FooterOpenLoggedOut: Story = {
  args: {
    isSidebarOpen: true,
  },
  decorators: [
    (Story) => (
      <QueryClientProvider client={loggedOutClient}>
        <div className="flex h-[200px] w-[270px] items-end justify-center border">
          <Story />
        </div>
      </QueryClientProvider>
    ),
  ],
};

export const FooterClosedLoggedIn: Story = {
  args: {
    isSidebarOpen: false,
  },
  decorators: [
    (Story) => (
      <QueryClientProvider client={loggedInClient}>
        <div className="flex h-[200px] w-[75px] items-end justify-center border">
          <Story />
        </div>
      </QueryClientProvider>
    ),
  ],
};

export const FooterClosedLoggedOut: Story = {
  args: {
    isSidebarOpen: false,
  },
  decorators: [
    (Story) => (
      <QueryClientProvider client={loggedOutClient}>
        <div className="flex h-[200px] w-[75px] items-end justify-center border">
          <Story />
        </div>
      </QueryClientProvider>
    ),
  ],
};
