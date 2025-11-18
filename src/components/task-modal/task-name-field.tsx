import { TextInput } from "@/components/index";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { TaskFormData } from "@/types/task-modal.types";

interface TaskNameFieldProps {
  register: UseFormRegister<TaskFormData>;
  errors: FieldErrors<TaskFormData>;
}

const TaskNameField = ({ register, errors }: TaskNameFieldProps) => {
  return (
    <div className="flex w-[336px] flex-col gap-2">
      <label htmlFor="taskTitle" className="text-lg font-medium text-blue-700">
        할 일 제목
      </label>
      <TextInput
        id="taskTitle"
        {...register("name", { required: "제목을 입력해주세요" })}
        placeholder="할 일 제목을 입력해주세요."
        className="placeholder:text-md placeholder:text-gray-800"
      />
      {errors.name && (
        <span className="text-sm text-red-500">{errors.name.message}</span>
      )}
    </div>
  );
};

export default TaskNameField;
