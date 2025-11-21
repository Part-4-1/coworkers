"use client";

import TaskDetailComment from "./_components/task-detail-comment";
import TaskDetailContents from "./_components/task-detail-contents";
import { InputReply } from "@/components";
import TaskDetailWrapper from "./_components/task-detail-wrapper";
import { useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import useGetTaskDetail from "@/hooks/api/task/use-get-task-detail";
import { AnimatePresence } from "framer-motion";
import { useCreateComment } from "@/hooks/api/comments/use-create-comment";

const Page = () => {
  const router = useRouter();
  const param = useParams();
  const taskId = Number(useSearchParams().get("task"));
  const taskListId = Number(useSearchParams().get("list"));
  const groupId = Number(param.groupId);
  const [taskIdKey, setTaskIdKey] = useState<number | null>(taskId);

  const handleClick = () => {
    setTaskIdKey(null);
  };

  const handleClose = () => {
    router.back();
  };

  const { data: taskDetailData, isPending } = useGetTaskDetail(
    groupId,
    taskListId,
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
