import { Meta, StoryObj } from "@storybook/nextjs";
import ProfileEdit from "./profile-edit";

const meta: Meta<typeof ProfileEdit> = {
  title: "Components/ProfileEdit",
  component: ProfileEdit,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "프로필 이미지와 편집할 수 있는 버튼을 보여주는 컴포넌트 입니다.이미지가 없을 경우 기본 아이콘이 표시됩니다.",
      },
    },
  },
  args: {
    className: "",
  },
  argTypes: {
    image: {
      description: "이미지 URL, 없을시 기본 이미지",
    },
    className: {
      description: "추가 스타일을 부여하기 위해 사용",
      control: "text",
    },
    onClick: {
      description: "클릭시 실행되는 함수",
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

export default meta;
