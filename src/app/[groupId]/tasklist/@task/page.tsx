"use client";

import TaskDetailComment from "./_components/task-detail-comment";
import TaskDetailContents from "./_components/task-detail-contents";
import TaskDetailHeader from "./_components/task-detail-header";
import data from "@/mocks/task-detail-data.json";
import { mockComments } from "@/mocks/comment-data";
import { InputReply } from "@/components";
import TaskDetailWrapper from "./_components/task-detail-wrapper";
import TaskDetailToggleBtn from "./_components/task-detail-complete-btn";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import useGetTaskDetail from "@/hooks/api/task/use-get-task-detail";

const Page = () => {
  const taskId = useSearchParams().get("taskid");
  const { data: taskDetailData, isPending } = useGetTaskDetail(
    3290,
    4711,
    Number(taskId)
  );

  if (!taskId) {
    return null;
  }

  useEffect(() => {
    console.log(taskDetailData);
  });

  return (
    <>
      {!isPending && (
        <TaskDetailWrapper>
          <div className="flex flex-col gap-5">
            <div className="relative flex flex-col gap-10 tablet:gap-14 pc:gap-[68px]">
              <div className="flex flex-col gap-6">
                <TaskDetailHeader
                  name={taskDetailData.name}
                  writer={taskDetailData.writer}
                  createdAt={taskDetailData.recurring.createdAt}
                  frequency={taskDetailData.recurring.frequencyType}
                  doneAt={taskDetailData.doneAt}
                  setEditMode={() => {}}
                  onToggleBtnClick={() => {}}
                />
                <TaskDetailContents
                  groupId={3290}
                  taskListId={4711}
                  taskId={Number(taskId)}
                  name={taskDetailData.name}
                  description={taskDetailData.description}
                  doneAt={taskDetailData.doneAt}
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-lg font-bold tablet:text-2lg">
                  댓글{" "}
                  <span className="text-blue-200">
                    {taskDetailData.commentCount}
                  </span>
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
      )}
    </>
  );
};

export default Page;
