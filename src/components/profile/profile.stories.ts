import { Profile } from "@/components/index";
import { Meta, StoryObj } from "@storybook/nextjs";

const meta: Meta<typeof Profile> = {
  title: "Components/Profile",
  component: Profile,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "프로필 이미지를 보여주는 컴포넌트입니다. 이미지가 없을 경우 기본 아이콘이 표시됩니다.",
      },
    },
  },
  args: {
    size: "lg",
    className: "",
  },
  argTypes: {
    image: {
      description: "이미지 URL, 없을시 기본 이미지",
    },
    size: {
      description: `"lg", "md", "sm" 프로필 크기 옵션`,
    },
    className: {
      description: "추가 스타일을 부여하기 위해 사용",
      control: "text",
    },
    onClick: {
      description: "클릭시 실행되는 함수, 존재할시 cursor-pointer 적용",
      action: "clicked",
      table: { category: "Events" },
    },
  },
};

type Story = StoryObj<typeof meta>;

export const Image: Story = {
  args: {
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export default meta;
