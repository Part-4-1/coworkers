import type { Meta, StoryObj } from "@storybook/react";
import PostCard from "./post-card";
import { Writer } from "@/types/article";

const meta = {
  title: "Components/PostCard",
  component: PostCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    image: { control: "text", description: "이미지 URL 입력" },
    title: { control: "text", description: "게시글 제목" },
    content: { control: "text", description: "게시글 내용" },
    writer: { control: "text", description: "게시글 작성자" },
    createdAt: { control: "text", description: "게시글 작성 일자" },
    likeCount: { control: "number", description: "좋아요 개수" },
    isLiked: { control: "boolean", description: "좋아요 여부" },
    isBest: { control: "boolean", description: "인기글 여부" },
  },
} satisfies Meta<typeof PostCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockWriter: Writer = {
  nickname: "김커피",
  id: 1,
};

export const Default: Story = {
  args: {
    image: "",
    title: "커피 머신 고장 신고합니다 ☕️",
    content: `오늘 아침 출근과 동시에 알게 된 사실...
커피머신이 고장났습니다. 이로 인해 많은 직원들이 커피를 마시지 못하고 있어 업무 효율이 떨어지고 있습니다.
빠른 수리 부탁드립니다.`,
    writer: mockWriter,
    createdAt: "2025-11-07T11:49:47Z",
    likeCount: 0,
    isLiked: false,
  },
};

export const UploadPostImage: Story = {
  args: {
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    title: "커피 머신 고장 신고합니다 ☕️",
    content: `오늘 아침 출근과 동시에 알게 된 사실...
커피머신이 고장났습니다. 이로 인해 많은 직원들이 커피를 마시지 못하고 있어 업무 효율이 떨어지고 있습니다.
빠른 수리 부탁드립니다.`,
    writer: mockWriter,
    createdAt: "2025-11-07T11:49:47Z",
    likeCount: 0,
    isLiked: false,
  },
};

export const BestPost: Story = {
  args: {
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    title: "커피 머신 고장 신고합니다 ☕️",
    content: `오늘 아침 출근과 동시에 알게 된 사실...
커피머신이 고장났습니다. 이로 인해 많은 직원들이 커피를 마시지 못하고 있어 업무 효율이 떨어지고 있습니다.
빠른 수리 부탁드립니다.`,
    writer: mockWriter,
    createdAt: "2025-11-07T11:49:47Z",
    likeCount: 1024,
    isLiked: true,
    isBest: true,
    className: "w-[300px]",
  },
};
