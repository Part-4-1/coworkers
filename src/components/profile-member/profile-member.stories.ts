import { Meta, StoryObj } from "@storybook/nextjs";
import ProfileMember from "./profile-member";

const meta: Meta<typeof ProfileMember> = {
  title: "Components/ProfileProfile",
  component: ProfileMember,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "팀 멤버의 정보를 보여주는 컴포넌트 입니다.",
      },
    },
  },
  args: {
    userName: "박서연",
    userEmail: "seoyeon@example.com",
  },
  argTypes: {
    userImage: {
      description: "프로필이미지 URL, 없을시 기본 이미지",
    },
    userName: {
      description: "멤버의 이름",
    },
    userEmail: {
      description: "멤버의 이메일",
    },
    onKebabClick: {
      description: "클릭시 실행되는 콜백함수",
      action: "clicked",
      table: { category: "Events" },
    },
    className: {
      description: "추가 스타일을 부여하기 위해 사용",
      control: "text",
    },
  },
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Image: Story = {
  args: {
    userImage: "https://randomuser.me/api/portraits/women/33.jpg",
  },
};

export default meta;
