"use client";

import TaskDetailComment from "./_components/task-detail-comment";
import TaskDetailContents from "./_components/task-detail-contents";
import TaskDetailHeader from "./_components/task-detail-header";
import data from "@/mocks/task-detail-data.json";
import { mockComments } from "@/mocks/comment-data";
import { InputReply } from "@/components";
import TaskDetailWrapper from "./_components/task-detail-wrapper";
import TaskDetailToggleBtn from "./_components/task-detail-complete-btn";

const Page = () => {
  return (
    <TaskDetailWrapper>
      <div className="flex flex-col gap-5">
        <div className="relative flex flex-col gap-10 tablet:gap-14 pc:gap-[68px]">
          <div className="flex flex-col gap-6">
            <TaskDetailHeader
              name={data.name}
              writer={data.writer}
              createdAt={data.recurring.createdAt}
              frequency={data.recurring.frequencyType}
              doneAt={data.doneAt}
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
          <div className="flex flex-col gap-4">
            <p className="text-lg font-bold tablet:text-2lg">
              댓글 <span className="text-blue-200">{data.commentCount}</span>
            </p>
            <InputReply />
          </div>
        </div>
        <TaskDetailComment commentData={mockComments} />
      </div>
      <div className="absolute bottom-1 right-1 tablet:hidden">
        <TaskDetailToggleBtn doneAt={data.doneAt} onClick={() => {}} />
      </div>
    </TaskDetailWrapper>
  );
};

export default Page;
