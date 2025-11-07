import { Meta, StoryObj } from "@storybook/nextjs";
import { Provider } from "jotai";
import { useState } from "react";
import Toast from "./toast";
import { Button } from "@/components";

const meta = {
  title: "Components/Toast",
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Provider>
        <Story />
      </Provider>
    ),
  ],
} satisfies Meta;

export default meta;

export const Interactive = () => {
  const [toast, setToast] = useState<{
    type: "success" | "error" | "warning";
    message: string;
  } | null>(null);

  const showToast = (
    type: "success" | "error" | "warning",
    message: string
  ) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 3200);
  };

  return (
    <div className="min-h-screen flex-col-center">
      <div className="flex w-full max-w-[300px] flex-col gap-4">
        <Button onClick={() => showToast("success", "성공 !")}>
          성공 토스트
        </Button>
        <Button variant="alert" onClick={() => showToast("error", "오류 !")}>
          오류 토스트
        </Button>
        <Button
          className="bg-orange"
          onClick={() => showToast("warning", "변경사항을 저장하세요")}
        >
          경고 토스트
        </Button>

        <div className="fixed left-1/2 top-8 z-50 -translate-x-1/2">
          {toast && <Toast {...toast} />}
        </div>
      </div>
    </div>
  );
};
