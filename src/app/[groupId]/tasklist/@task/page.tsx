"use client";

import TaskDetailComment from "./_components/task-detail-comment";
import TaskDetailContents from "./_components/task-detail-contents";
import { InputReply } from "@/components";
import TaskDetailWrapper from "./_components/task-detail-wrapper";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import useGetTaskDetail from "@/hooks/api/task/use-get-task-detail";
import { AnimatePresence } from "framer-motion";
import { useCreateComment } from "@/hooks/api/comments/use-create-comment";
import { motion } from "framer-motion";
import cn from "@/utils/clsx";

const pageVariants = {
  initial: {
    x: "100%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.2,
    } as const,
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
      duration: 0.2,
    } as const,
  },
};

const Page = () => {
  const router = useRouter();
  const param = useParams();
  const searchParam = useSearchParams();
  const taskId = Number(searchParam.get("task"));
  const taskListId = Number(searchParam.get("list"));
  const groupId = Number(param.groupId);

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
    <AnimatePresence mode="wait">
      {taskId ? (
        <motion.aside
          key={taskId}
          variants={pageVariants}
          initial="initial"
          animate="visible"
          exit="exit"
          className={cn(
            "relative left-0 flex w-full min-w-[375px] flex-col overflow-y-auto bg-white px-7 py-3",
            "tablet:max-w-[520px] tablet:gap-4 tablet:pt-10",
            "pc:max-w-[780px] pc:gap-5"
          )}
        >
          <TaskDetailWrapper onClose={handleClose}>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-10 tablet:gap-14 pc:gap-[68px]">
                {!isPending ? (
                  <TaskDetailContents
                    {...taskDetailData}
                    createdAt={taskDetailData.recurring.createdAt}
                    groupId={groupId}
                    taskListId={taskListId}
                    taskId={taskId}
                  />
                ) : (
                  ""
                )}
                <div className="flex flex-col gap-4">
                  <p className="text-lg font-bold tablet:text-2lg">
                    댓글{" "}
                    {!isPending ? (
                      <span className="text-blue-200">
                        {taskDetailData.commentCount}
                      </span>
                    ) : (
                      ""
                    )}
                  </p>
                  <InputReply onSubmit={postTaskDetailComment} />
                </div>
              </div>
              <TaskDetailComment taskId={taskId} />
            </div>
          </TaskDetailWrapper>
        </motion.aside>
      ) : null}
    </AnimatePresence>
  );
};

export default Page;
