import type { Meta, StoryObj } from "@storybook/react";
import GnbHeader from "./gnb-header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const MOCK_USER = {
  nickname: "가상의 유저",
  image: "",
  memberships: [
    {
      group: {
        id: 1,
        name: "테스트 팀",
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

loggedInClient.setQueryData(QUERY_KEY, MOCK_USER);

const loggedOutClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const meta = {
  title: "components/GnbHeader",
  component: GnbHeader,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof GnbHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {
  decorators: [
    (Story) => {
      return (
        <QueryClientProvider client={loggedOutClient}>
          <Story />
        </QueryClientProvider>
      );
    },
  ],
};

export const LoggedIn: Story = {
  decorators: [
    (Story) => {
      return (
        <QueryClientProvider client={loggedInClient}>
          <Story />
        </QueryClientProvider>
      );
    },
  ],
};
