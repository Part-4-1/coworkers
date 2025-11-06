import cn from "@/utils/clsx";
import tailwindConfig from "../../../tailwind.config";
import resolveConfig from "tailwindcss/resolveConfig";

interface TaskChipProps {
  id: string;
  radioName: string;
  taskName: string;
  count: number;
}

const colors = resolveConfig(tailwindConfig).theme?.colors;

const TaskChip = ({ radioName, id, taskName, count }: TaskChipProps) => {
  return (
    <div>
      <input
        type="radio"
        id={id}
        name={radioName}
        value={id}
        className="peer hidden"
      />
      <label
        htmlFor={id}
        className={cn(
          "w-fit justify-between gap-1 rounded-full border px-3 py-2 font-medium flex-center",
          "tablet:px-4 tablet:py-3",
          "py-0 pc:h-[54px] pc:w-full pc:justify-between pc:rounded-xl pc:px-4",
          "cursor-pointer border-gray-300 bg-white hover:bg-gray-50",
          "peer-checked:border-none peer-checked:bg-blue-200 peer-checked:text-white",
          `[--count-color:${colors.blue[200]}] peer-checked:[--count-color:text-white]`
        )}
      >
        <span className="text-sm tablet:text-lg">{taskName}</span>
        <span className="text-md font-bold text-[--count-color] tablet:text-lg">
          {count}
        </span>
      </label>
    </div>
  );
};

export default TaskChip;
