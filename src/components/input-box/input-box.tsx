"use client";

import type { ComponentPropsWithRef } from "react";
import cn from "@/utils/clsx";

/**
 * @author junyeol
 * @description 자유게시판, 할 일 생성에서 사용되는 Textarea 컴포넌트
 * @params placeholder - 텍스트가 없을시 표기되는 텍스트
 * @params width - Textarea의 width
 * @params height - Textarea의 height
 */

type InputBoxProps = ComponentPropsWithRef<"textarea"> & {
  width?: string;
  height?: string;
};

/**
 * @author junyeol
 * @description InputBox 컴포넌트
 * @example
 * <InputBox
 *  placeholder="메모를 입력해주세요."
 *  width="w-full tablet:max-w-[600px] pc:max-w-[900px]"
 *  height="max-h-[75px] tablet:max-h-[100px] pc:max-h-[150px]"
 * />
 */

const InputBox = ({
  id,
  placeholder,
  width = "w-full",
  height = "h-[48px]",
  className,
  ref,
  ...rest
}: InputBoxProps) => {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-gray-300 focus-within:border-blue-200 has-[:placeholder-shown]:border-gray-300",
        width,
        height
      )}
    >
      <textarea
        id={id}
        ref={ref}
        placeholder={placeholder}
        className={cn(
          "h-full w-full resize-none bg-transparent px-4 py-3 font-normal focus:outline-none",
          "text-md placeholder:text-sm",
          "tablet:text-lg tablet:placeholder:text-md",
          "break-words",
          className
        )}
        {...rest}
      />
    </div>
  );
};

export default InputBox;
