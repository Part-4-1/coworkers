"use client";

import type { ComponentPropsWithRef, ReactNode } from "react";
import cn from "@/utils/clsx";

/**
 * @author junyeol
 * @description TextInput 컴포넌트는 기본적인 텍스트 입력을 위한 컴포넌트입니다.
 * @param id - input 요소의 id
 * @param errorMessage - 에러 메시지
 * @param containerClassName - 컨테이너의 className
 * @param rightIcon - 입력 오른쪽에 표시할 버튼/아이콘 등 추가 요소
 * @param leftIcon - 입력 왼쪽에 표시할 버튼/아이콘 등 추가 요소
 */
interface TextInputProps extends ComponentPropsWithRef<"input"> {
  id: string;
  errorMessage?: string;
  containerClassName?: string;
  rightIcon?: ReactNode;
  rightIconClassName?: string;
  leftIcon?: ReactNode;
  leftIconClassName?: string;
}

const TextInput = ({
  id,
  className,
  containerClassName,
  errorMessage,
  readOnly,
  rightIcon,
  rightIconClassName,
  leftIcon,
  leftIconClassName,
  ref,
  ...rest
}: TextInputProps) => {
  const showError = Boolean(errorMessage);
  const descriptionId = showError ? `${id}-error` : undefined;

  return (
    <div className={cn("flex w-full flex-col gap-2", containerClassName)}>
      <div className="relative">
        <input
          ref={ref}
          id={id}
          readOnly={readOnly}
          className={cn(
            "w-full rounded-lg border px-[16px] py-[14px] text-md transition-colors",
            "tablet:text-lg",
            "pc:text-lg",
            "focus:border-blue-200 focus:outline-none",
            showError
              ? "border-red-500 focus:border-red-500"
              : "border-blue-400 placeholder-shown:border-gray-300",
            readOnly &&
              "pointer-events-none select-none read-only:border-gray-300 read-only:bg-gray-50 read-only:text-gray-700",
            leftIcon && "pl-[48px]",
            className
          )}
          aria-invalid={showError}
          aria-describedby={descriptionId}
          {...rest}
        />

        {rightIcon && (
          <div
            className={cn(
              "absolute inset-y-0 right-2 flex items-center",
              rightIconClassName
            )}
          >
            {rightIcon}
          </div>
        )}

        {leftIcon && (
          <div
            className={cn(
              "absolute inset-y-0 left-4 flex items-center",
              leftIconClassName
            )}
          >
            {leftIcon}
          </div>
        )}
      </div>

      {showError && (
        <p id={descriptionId} className="text-md text-red-500">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default TextInput;
