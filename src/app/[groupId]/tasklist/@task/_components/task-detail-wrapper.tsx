import { Button, Icon } from "@/components";
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
