"use client";

import TaskDetailContents from "./_components/task-detail-contents";
import TaskDetailHeader from "./_components/task-detail-header";
import data from "@/mocks/task-detail-data.json";

const Page = () => {
  return (
    <div className="w-full min-w-[375px] tablet:max-w-[520px] pc:max-w-[780px]">
      <div className="flex flex-col gap-6">
        <TaskDetailHeader
          name={data.name}
          writer={data.writer}
          createdAt={data.recurring.createdAt}
          frequency={data.recurring.frequencyType}
          doneAt={null}
          setEditMode={() => {}}
          onToggleBtnClick={() => {}}
        />
        <TaskDetailContents
          name="할 일 상세 컴포넌트 제작"
          isEdit={false}
          description="할 일 상세 페이지에 들어가는 컴포넌트를 제작합니다."
        />
      </div>
    </div>
  );
};

export default Page;
