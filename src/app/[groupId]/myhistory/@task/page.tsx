"use client";

import TaskDetailComment from "./_components/task-detail-comment";
import TaskDetailContents from "./_components/task-detail-contents";
import { InputReply } from "@/components";
import TaskDetailWrapper from "./_components/task-detail-wrapper";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useGetTaskDetail from "@/hooks/api/task/use-get-task-detail";
import { AnimatePresence } from "framer-motion";
import { useCreateComment } from "@/hooks/api/comments/use-create-comment";

const Page = () => {
  const router = useRouter();
  const param = useSearchParams().get("task");
  const taskId = Number(param);
  const [taskIdKey, setTaskIdKey] = useState(param);

  const handleClick = () => {
    setTaskIdKey(null);
  };

  const handleClose = () => {
    router.back();
  };

  const { data: taskDetailData, isPending } = useGetTaskDetail(
    // TODO: groupId, taskListId 동적으로 받아올 수 있도록 수정
    3290,
    4711,
    taskId
  );

  const { mutate: postTaskDetailComment } = useCreateComment(taskId);

  return (
    <AnimatePresence mode="wait" onExitComplete={handleClose}>
      {!isPending && taskIdKey && (
        <TaskDetailWrapper key={taskIdKey} onClose={handleClick}>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-10 tablet:gap-14 pc:gap-[68px]">
              <TaskDetailContents
                {...taskDetailData}
                createdAt={taskDetailData.recurring.createdAt}
                groupId={3290}
                taskListId={4711}
                taskId={taskId}
              />
              <div className="flex flex-col gap-4">
                <p className="text-lg font-bold tablet:text-2lg">
                  댓글{" "}
                  <span className="text-blue-200">
                    {taskDetailData.commentCount}
                  </span>
                </p>
                <InputReply onSubmit={postTaskDetailComment} />
              </div>
            </div>
            <TaskDetailComment taskId={taskId} />
          </div>
        </TaskDetailWrapper>
      )}
    </AnimatePresence>
  );
};

export default Page;
