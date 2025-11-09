"use client";

import type { TaskDetailProps } from "@/types/task-detail";
import TaskDetailHeader from "./_components/task-detail-header";
import { useState } from "react";

const TaskDetail = ({
  name,
  writer,
  createdAt,
  frequency,
  doneAt,
}: TaskDetailProps) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div>
      <TaskDetailHeader
        name={name}
        writer={writer}
        createdAt={createdAt}
        frequency={frequency}
        doneAt={doneAt}
        setEditMode={setIsEdit}
        onToggleBtnClick={() => {}}
      />
    </div>
  );
};

export default TaskDetail;
