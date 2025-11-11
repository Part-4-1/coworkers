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
          name={data.name}
          description={
            "필수 정보 10분 입력하면 3일 안에 법인 설립이 완료되는 법인 설립 서비스의 장점에 대해 상세하게 설명드리기"
          }
        />
      </div>
    </div>
  );
};

export default Page;
