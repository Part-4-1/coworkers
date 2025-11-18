import cn from "@/utils/clsx";
import Icon from "../icon/Icon";
import { MouseEventHandler } from "react";

export interface CheckboxProps {
  id: number;
  taskName?: string;
  isDone: string | null;
  size?: "sm" | "lg";
  onClickCheckbox?: MouseEventHandler<HTMLInputElement>;
}

const checkboxSizes = {
  sm: "tablet:text-gray-400 tablet:h-[18px] tablet:w-[18px]",
  lg: "mobile:text-gray-800 mobile:h-6 mobile:w-6",
};

const checkboxTextSizes = {
  sm: "tablet:text-xs",
  lg: "mobile:text-md",
};

const Checkbox = ({
  id,
  taskName = "할 일을 입력해주세요.",
  isDone = null,
  size,
  onClickCheckbox,
}: CheckboxProps) => {
  return (
    <label
      htmlFor={id.toString()}
      className="flex w-full cursor-pointer items-center gap-2"
    >
      <input
        id={id.toString()}
        type="checkbox"
        className="sr-only"
        onClick={onClickCheckbox}
      />
      <Icon
        icon={isDone ? "checkboxActive" : "checkboxDefault"}
        className={cn(
          "shrink-0",
          "h-[18px] w-[18px] text-gray-400",
          "text-gray-800 tablet:h-6 tablet:w-6",
          size && checkboxSizes[size]
        )}
      />
      <p
        className={cn(
          "truncate text-xs",
          "tablet:text-md",
          size && checkboxTextSizes[size],
          isDone && "text-gray-700 line-through"
        )}
      >
        {taskName}
      </p>
    </label>
  );
};

export default Checkbox;
