"use client";

import TaskDetailComment from "../_components/task-detail-comment";
import TaskDetailContents from "../_components/task-detail-contents";
import { Icon } from "@/components";
import TaskDetailWrapper from "../_components/task-detail-wrapper";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import useGetTaskDetail from "@/hooks/api/task/use-get-task-detail";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import cn from "@/utils/clsx";
import TaskDetailInputReply from "../_components/task-detail-input-reply";

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

const TaskDetail = () => {
  const router = useRouter();
  const param = useParams();
  const pathName = usePathname();
  const searchParam = useSearchParams();
  const taskId = Number(searchParam.get("task"));
  const taskListId = Number(searchParam.get("list"));
  const groupId = Number(param.groupId);

  const handleClose = () => {
    router.push(`${pathName}?list=${taskListId}`);
  };

  const { data: taskDetailData, isPending } = useGetTaskDetail(
    groupId,
    taskListId,
    taskId
  );

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
            "relative left-0 z-50 flex w-full min-w-[375px] flex-col overflow-y-auto bg-white px-7 py-3",
            "tablet:fixed tablet:left-auto tablet:right-0 tablet:top-0 tablet:h-screen tablet:max-w-[520px] tablet:gap-4 tablet:pt-10 tablet:drop-shadow-lg",
            "pc:relative pc:left-0 pc:right-auto pc:top-auto pc:h-auto pc:max-w-[780px] pc:gap-5"
          )}
        >
          <TaskDetailWrapper onClose={handleClose}>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-10 tablet:gap-14 pc:gap-[68px]">
                <TaskDetailContents
                  {...taskDetailData}
                  createdAt={taskDetailData?.recurring?.createdAt}
                  groupId={groupId}
                  taskListId={taskListId}
                  taskId={taskId}
                  isPending={isPending}
                />
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-1">
                    <Icon
                      icon="comment"
                      className="h-[18px] w-[18px] tablet:h-5 tablet:w-5"
                    />
                    <span className="text-lg font-bold text-blue-200">
                      {taskDetailData?.commentCount || 0}
                    </span>
                  </div>
                  <TaskDetailInputReply taskId={taskId} />
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

export default TaskDetail;
