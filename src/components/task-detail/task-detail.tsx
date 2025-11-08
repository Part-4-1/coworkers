"use client";

import type { TaskDetailProps } from "@/types/task-detail";
import TaskDetailHeader from "./task-detail-header";
import { useState } from "react";

const TaskDetail = ({
  name,
  writer,
  createdAt,
  frequency,
}: TaskDetailProps) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div>
      <TaskDetailHeader
        name={name}
        writer={writer}
        createdAt={createdAt}
        frequency={frequency}
        setEditMode={setIsEdit}
      />
    </div>
  );
};

export default TaskDetail;
