"use client";

import TaskDetailComment from "./_components/task-detail-comment";
import TaskDetailContents from "./_components/task-detail-contents";
import data from "@/mocks/task-detail-data.json";
import { mockComments } from "@/mocks/comment-data";
import { InputReply } from "@/components";
import TaskDetailWrapper from "./_components/task-detail-wrapper";
import TaskDetailToggleBtn from "./_components/task-detail-complete-btn";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useGetTaskDetail from "@/hooks/api/task/use-get-task-detail";
import { AnimatePresence } from "framer-motion";

const Page = () => {
  const router = useRouter();
  const taskId = useSearchParams().get("taskid");
  const [taskIdKey, setTaskIdKey] = useState(taskId);

  const handleClick = () => {
    setTaskIdKey(null);
  };

  const handleClose = () => {
    router.back();
  };

  const { data: taskDetailData, isPending } = useGetTaskDetail(
    3290,
    4711,
    Number(taskId)
  );

  useEffect(() => {
    // console.log(taskDetailData);
  });

  return (
    <AnimatePresence mode="wait" onExitComplete={handleClose}>
      {!isPending && taskIdKey && (
        <TaskDetailWrapper key={taskIdKey} onClose={handleClick}>
          <div className="flex flex-col gap-5">
            <div className="relative flex flex-col gap-10 tablet:gap-14 pc:gap-[68px]">
              <TaskDetailContents
                name={taskDetailData.name}
                writer={taskDetailData.writer}
                createdAt={taskDetailData.recurring.createdAt}
                frequency={taskDetailData.recurring.frequencyType}
                doneAt={taskDetailData.doneAt}
                groupId={3290}
                taskListId={4711}
                taskId={Number(taskId)}
                description={taskDetailData.description}
              />
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
    </AnimatePresence>
  );
};

export default Page;
