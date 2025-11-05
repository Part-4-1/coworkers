import { Meta, StoryObj } from "@storybook/nextjs";
import Dropdown from "./dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "트리거를 클릭하면 메뉴가 펼쳐지는 드롭다운 컴포넌트입니다. 텍스트 정렬, 메뉴 정렬, 폭 고정, 방향(위/아래) 등을 제어할 수 있습니다.",
      },
    },
  },
  args: {
    trigger: (
      <button className="w-[200px] rounded-[10px] border border-gray-300 bg-gray-300 px-4 py-2">
        드롭다운 열기
      </button>
    ),
    items: [
      { label: "마이 히스토리" },
      { label: "계정 설정" },
      { label: "팀 참여" },
      { label: "로그아웃" },
    ],
    textAlign: "center",
    menuAlign: "end",
    isWidthFull: false,
    isDirectionDown: true,
  },
  argTypes: {
    trigger: {
      description: "드롭다운 메뉴를 펼치는 트리거 요소",
    },
    items: {
      description: "드롭다운 메뉴 항목 배열 {label, onClick}",
    },
    textAlign: {
      description: "드롭다운 메뉴의 텍스트 정렬 방식",
    },
    menuAlign: {
      description: "드롭다운 메뉴의 정렬 기준",
    },
    isWidthFull: {
      description: "메뉴의 width를 트리거의 width와 동일하게 설정할지 여부",
    },
    isDirectionDown: {
      description: "메뉴 방향 (true: 아래, false: 위)",
    },
    className: {
      description: "추가 스타일 적용",
    },
  },
};

type Story = StoryObj<typeof meta>;

export const TextAlignStart: Story = {
  args: { textAlign: "start" },
};

export const TextAlignCenter: Story = {
  args: { textAlign: "center" },
};

export const TextAlignEnd: Story = {
  args: { textAlign: "end" },
};

export const MenuAlignStart: Story = {
  args: { menuAlign: "start" },
};

export const MenuAlignCenter: Story = {
  args: { menuAlign: "center" },
};

export const MenuAlignEnd: Story = {
  args: { menuAlign: "end" },
};

export const FullWidth: Story = {
  args: {
    isWidthFull: true,
  },
};

export const DirectionUp: Story = {
  args: {
    isDirectionDown: false,
  },
};

export default meta;
