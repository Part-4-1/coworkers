"use client";

import { useEffect, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

export interface TaskDetailContentsProps {
  name: string;
  description: string;
}

const TaskDetailContents = ({ name, description }: TaskDetailContentsProps) => {
  const [text, setText] = useState<string>();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (text) {
        // TODO: 할 일 수정 API로 변경하기
        console.log("수정 API 실행");
      }
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [text]);

  return (
    <TextareaAutosize
      name={`${name} description`}
      defaultValue={description}
      onChange={(e) => setText(e.target.value)}
      className="h-auto w-full resize-none focus:outline-none"
    />
  );
};

export default TaskDetailContents;
