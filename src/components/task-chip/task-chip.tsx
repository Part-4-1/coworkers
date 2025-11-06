import cn from "@/utils/clsx";

interface TaskChipProps {
  id: string;
  name: string;
  todo: string;
  count: number;
}

const TaskChip = ({ name, id, todo, count }: TaskChipProps) => {
  return (
    <div>
      <input
        type="radio"
        id={id}
        name={name}
        value={id}
        className="peer sr-only"
      />
      <label htmlFor={id}></label>
    </div>

    // <button
    //   className={cn(
    //     "flex w-fit justify-between rounded-full border px-3 py-2",
    //     "border-gray-300 bg-white hover:bg-gray-50 active:bg-blue-200 active:text-white"
    //   )}
    //   aria-label={todo}
    // >
    //   <span>{todo}</span>
    //   <span>{count}</span>
    // </button>
  );
};

export default TaskChip;
