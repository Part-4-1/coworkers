import { Button, Icon } from "@/components";
import cn from "@/utils/clsx";
import { motion } from "framer-motion";
import { ReactNode } from "react";

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

const TaskDetailWrapper = ({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose: () => void;
}) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="visible"
      exit="exit"
      className={cn(
        "flex w-full min-w-[375px] flex-col px-7 py-3",
        "tablet:max-w-[520px] tablet:gap-4 tablet:pt-10",
        "pc:max-w-[780px] pc:gap-5"
      )}
    >
      <div className="flex flex-col gap-5 tablet:gap-[15px] pc:gap-[74px]">
        <Button variant="none" onClick={onClose}>
          <Icon icon="x" className="h-6 w-6" />
        </Button>
        {children}
      </div>
    </motion.div>
  );
};

export default TaskDetailWrapper;
