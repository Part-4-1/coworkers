"use client";

import TaskDetailHeader from "./_components/task-detail-header";

const Page = () => {
  return (
    <div className="w-[375px] tablet:w-[520px] pc:w-[780px]">
      <TaskDetailHeader
        name="할 일 상세 컴포넌트 제작"
        writer={{
          nickname: "hwitae",
          id: 1,
          image: "https://randomuser.me/api/portraits/men/12.jpg",
        }}
        createdAt="2025-11-08T23:47:20Z"
        frequency="DAILY"
        doneAt={null}
        setEditMode={() => {}}
        onToggleBtnClick={() => {}}
      />
    </div>
  );
};

export default Page;
