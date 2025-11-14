import { InputBox } from "@/components/index";
import { UseFormRegister } from "react-hook-form";
import { TaskFormData } from "@/types/task-modal.types";

interface TaskMemoFieldProps {
  register: UseFormRegister<TaskFormData>;
}

const TaskMemoField = ({ register }: TaskMemoFieldProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="taskMemo" className="text-lg font-medium text-blue-700">
        할 일 메모
      </label>
      <InputBox
        id="taskMemo"
        {...register("description")}
        className="placeholder:text-gray-800"
        placeholder="메모를 입력해주세요."
      />
    </div>
  );
};

export default TaskMemoField;
