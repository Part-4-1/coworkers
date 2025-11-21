import cn from "@/utils/clsx";

interface TaskChipProps {
  id: string;
  radioName: string;
  taskName: string;
  className?: string;
}

const COUNT_COLOR = "#5189FA";

/**
 * @author hwitae
 * @description 할 일 목록을 라디오 버튼 형태로 보여주는 컴포넌트입니다.
 * @param id - 라디오 버튼의 id 값 (id 값이 value 값으로도 사용됩니다)
 * @param radioName - 라디오 버튼의 name 값 (이름이 같아야 같은 그룹으로 묶이게 됩니다)
 * @param taskName - 할 일 목록 이름
 * @param count - 할 일 개수
 * @param className - 추가적인 스타일 클래스
 * @returns <TaskChip />
 * @example
 * <TaskChip
 *    id="task-1"
 *    radioName="task"
 *    taskName="오늘 할 일"
 *    count={5}
 * />
 * <TaskChip
 *    id="task-2"
 *    radioName="task"
 *    taskName="오늘 할 일"
 *    count={5}
 * />
 */
const TaskChip = ({ radioName, id, taskName, className }: TaskChipProps) => {
  return (
    <div className={className}>
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
          "pc:h-[54px] pc:w-full pc:justify-between pc:rounded-xl pc:px-4 pc:py-0",
          "cursor-pointer border-gray-300 bg-white hover:bg-gray-50",
          "peer-checked:border-blue-200 peer-checked:bg-blue-200 peer-checked:text-white",
          `[--count-color:${COUNT_COLOR}] peer-checked:[--count-color:text-white]`,
          className
        )}
      >
        <span className="text-sm tablet:text-lg">{taskName}</span>
      </label>
    </div>
  );
};

export default TaskChip;
