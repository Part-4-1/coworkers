"use client";

import { Button, TaskModal } from "@/components";
import usePrompt from "@/hooks/use-prompt";

const Page = () => {
  const { Modal, openPrompt, closePrompt } = usePrompt(
    <TaskModal groupId={3290} taskListId={4711} />,
    // <CreateTask />,
    true
  );

  return (
    <div>
      <div>
        <Button type="button" onClick={openPrompt}>
          모달 열기
        </Button>
        <Modal />
      </div>
    </div>
  );
};

const CreateTask = () => {
  return (
    <div className="w-full gap-6 flex-col-center">
      <div className="gap-4 flex-col-center">
        <p>할 일 목록</p>
        <input type="text" placeholder="목록 명 입력..." />
      </div>
      <Button>만들기</Button>
    </div>
  );
};

export default Page;
