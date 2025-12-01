import { Meta, StoryObj } from "@storybook/nextjs";
import Reply from "./reply";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const meta = {
  title: "Components/Reply",
  component: Reply,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    comment: {
      description: "댓글 데이터 객체",
    },
    onEdit: {
      description: "댓글 수정 콜백",
    },
    onDelete: {
      description: "댓글 삭제 콜백",
    },
  },
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <div className="min-h-[500px] flex-center">
          <Story />
        </div>
      </QueryClientProvider>
    ),
  ],
} satisfies Meta<typeof Reply>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    comment: {
      id: 1,
      writer: {
        id: 101,
        nickname: "우지은",
        image:
          "https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1586271210/noticon/sageach1qrmmyfufwli1.gif",
      },
      content: "제가 저장해둔 믹스커피 드릴게요..ㅎ,ㅎ",
      createdAt: "2024-07-25T06:30:00.000Z",
      updatedAt: "2024-07-25T06:30:00.000Z",
    },
    onEdit: (commentId: number, content: string) =>
      console.log("댓글 수정:", commentId, content),
    onDelete: (commentId: number) => console.log("댓글 삭제:", commentId),
  },
};

export const LongContent: Story = {
  args: {
    comment: {
      id: 2,
      writer: {
        id: 102,
        nickname: "우지은",
        image:
          "https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1586271210/noticon/sageach1qrmmyfufwli1.gif",
      },
      content:
        "이 글을 읽고 정말 많은 것을 배웠습니다. 특히 React 19의 새로운 기능들에 대해 자세히 설명해주셔서 감사합니다. forwardRef가 불필요해진다는 점이 정말 흥미롭네요. 앞으로 프로젝트에 적용해보겠습니다!이 글을 읽고 정말 많은 것을 배웠습니다. 특히 React 19의 새로운 기능들에 대해 자세히 설명해주셔서 감사합니다. forwardRef가 불필요해진다는 점이 정말 흥미롭네요. 앞으로 프로젝트에 적용해보겠습니다!이 글을 읽고 정말 많은 것을 배웠습니다. 특히 React 19의 새로운 기능들에 대해 자세히 설명해주셔서 감사합니다. forwardRef가 불필요해진다는 점이 정말 흥미롭네요. 앞으로 프로젝트에 적용해보겠습니다!",
      createdAt: "2024-07-25T06:30:00.000Z",
      updatedAt: "2024-07-25T06:30:00.000Z",
    },
    onEdit: (commentId: number, content: string) =>
      console.log("댓글 수정:", commentId, content),
    onDelete: (commentId: number) => console.log("댓글 삭제:", commentId),
  },
};

export const ShortContent: Story = {
  args: {
    comment: {
      id: 3,
      writer: {
        id: 103,
        nickname: "우지은",
        image:
          "https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1586271210/noticon/sageach1qrmmyfufwli1.gif",
      },
      content: "좋아요!",
      createdAt: "2024-07-25T06:30:00.000Z",
      updatedAt: "2024-07-25T06:30:00.000Z",
    },
    onEdit: (commentId: number, content: string) =>
      console.log("댓글 수정:", commentId, content),
    onDelete: (commentId: number) => console.log("댓글 삭제:", commentId),
  },
};

export const LongNickname: Story = {
  args: {
    comment: {
      id: 4,
      writer: {
        id: 104,
        nickname: "아주아주긴닉네임을가진사용자",
        image:
          "https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1586271210/noticon/sageach1qrmmyfufwli1.gif",
      },
      content: "긴 닉네임 테스트입니다.",
      createdAt: "2024-07-25T06:30:00.000Z",
      updatedAt: "2024-07-25T06:30:00.000Z",
    },
    onEdit: (commentId: number, content: string) =>
      console.log("댓글 수정:", commentId, content),
    onDelete: (commentId: number) => console.log("댓글 삭제:", commentId),
  },
};

export const NoProfileImage: Story = {
  args: {
    comment: {
      id: 5,
      writer: {
        id: 105,
        nickname: "우지은",
        image: "",
      },
      content: "프로필 이미지가 없는 경우입니다.",
      createdAt: "2024-07-25T06:30:00.000Z",
      updatedAt: "2024-07-25T06:30:00.000Z",
    },
    onEdit: (commentId: number, content: string) =>
      console.log("댓글 수정:", commentId, content),
    onDelete: (commentId: number) => console.log("댓글 삭제:", commentId),
  },
};
