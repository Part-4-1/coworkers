"use client";

import { useState } from "react";
import cn from "@/utils/clsx";
import Button from "../button/button";
import Icon from "../icon/Icon";
import TextareaAutosize from "react-textarea-autosize";

/**
 * @author junyeol
 * @returns 댓글 작성 컴포넌트
 */

const InputReply = () => {
  const [value, setValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex w-full max-w-[732px] flex-col border-y-2 border-gray-300 py-3">
      <div className="gap-6 pl-3 pr-3 flex-center">
        <TextareaAutosize
          placeholder="댓글을 달아주세요"
          value={value}
          onChange={handleChange}
          className="w-full max-w-[708px] resize-none text-xs text-blue-700 placeholder:text-gray-800 focus:outline-none tablet:text-md"
          minRows={1}
        />
        <Button
          variant="none"
          disabled={!value}
          className={cn(
            "h-[24px] w-[24px] flex-shrink-0 rounded-full",
            value ? "bg-blue-100" : "bg-gray-800"
          )}
        >
          <Icon icon="upArrow" className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default InputReply;
