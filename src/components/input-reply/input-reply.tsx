"use client";

import { useState } from "react";
import cn from "@/utils/clsx";
import Button from "../button/button";
import Icon from "../icon/Icon";
import TextareaAutosize from "react-textarea-autosize";
import { MAX_COMMENT_LENGTH } from "@/constants/comment";

/**
 * @author junyeol
 * @returns 댓글 작성 컴포넌트
 */

interface InputReplyProps {
  onSubmit: (comment: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

const InputReply = ({
  onSubmit,
  placeholder = "댓글을 달아주세요",
  disabled = false,
}: InputReplyProps) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= MAX_COMMENT_LENGTH) {
      setValue(e.target.value);
    }
  };

  const handleSubmit = () => {
    if (!value.trim() || disabled) return;

    onSubmit(value.trim());
    setValue("");
  };

  return (
    <div className="flex w-full max-w-[780px] flex-col border-y-2 border-gray-300 py-3">
      <div className="gap-6 pl-3 pr-3 flex-center">
        <TextareaAutosize
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          maxLength={MAX_COMMENT_LENGTH}
          className="w-full max-w-[708px] resize-none text-xs text-blue-700 placeholder:text-gray-800 focus:outline-none tablet:text-md"
          minRows={1}
        />
        <Button
          variant="none"
          disabled={!value.trim() || disabled}
          onClick={handleSubmit}
          className={cn(
            "h-[24px] w-[24px] flex-shrink-0 rounded-full",
            value ? "bg-blue-100" : "bg-gray-800"
          )}
        >
          <Icon icon="upArrow" className="h-4 w-4" />
        </Button>
      </div>
      {value.length > 0 && (
        <div className="pr-3 pt-1 text-right">
          <span
            className={cn(
              "text-xs",
              value.length === MAX_COMMENT_LENGTH
                ? "text-red-500"
                : "text-gray-500"
            )}
          >
            {value.length}/{MAX_COMMENT_LENGTH}
          </span>
        </div>
      )}
    </div>
  );
};

export default InputReply;
