"use client";

import usePatchTaskDetail, {
  PatchTaskDetailData,
} from "@/hooks/api/task/use-patch-task-detail";
import { UseMutateFunction } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

export interface TaskDetailContentsProps {
  groupId: number;
  taskListId: number;
  taskId: number;
  name: string;
  description: string;
  doneAt: string | null;
  patchFn: UseMutateFunction<
    AxiosResponse<any, any, {}> | undefined,
    Error,
    PatchTaskDetailData,
    unknown
  >;
}

const TaskDetailContents = ({
  groupId,
  taskListId,
  taskId,
  name,
  description,
  doneAt,
  patchFn,
}: TaskDetailContentsProps) => {
  const [text, setText] = useState<string>();
  const timer = useRef<NodeJS.Timeout | null>(null);
  const newText = useRef<string>(description);

  const { isError, mutate } = usePatchTaskDetail();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    newText.current = e.target.value;
    setText(e.target.value);
  };

  useEffect(() => {
    let patchData = {
      name,
      description: newText.current,
      done: doneAt ? true : false,
    };

    if (text?.trim() !== "") {
      timer.current = setTimeout(() => {
        mutate({ groupId, taskListId, taskId, data: patchData });
      }, 1500);
    }

    return () => {
      timer.current && clearTimeout(timer.current);
    };
  }, [text]);

  return (
    <TextareaAutosize
      name={`${name} description`}
      defaultValue={description}
      onChange={handleChange}
      className="h-auto w-full resize-none focus:outline-none"
    />
  );
};

export default TaskDetailContents;
