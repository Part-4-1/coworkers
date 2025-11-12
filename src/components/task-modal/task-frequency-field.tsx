import { Dropdown } from "@/components/index";
import DaysSelector from "./task-modal-day-selector";
import { Controller, Control, FieldErrors } from "react-hook-form";
import { TaskFormData } from "@/types/task-modal.types";
import { FrequencyType } from "@/types/task";
import { REPEAT_OPTIONS } from "@/constants/task-modal.constants";

interface TaskFrequencyFieldProps {
  control: Control<TaskFormData>;
  frequencyType: FrequencyType;
  errors: FieldErrors<TaskFormData>;
}

const TaskFrequencyField = ({
  control,
  frequencyType,
  errors,
}: TaskFrequencyFieldProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-lg font-medium text-blue-700">반복 설정</label>
      <Controller
        name="frequencyType"
        control={control}
        render={({ field }) => (
          <Dropdown
            items={REPEAT_OPTIONS.map((option) => ({
              label: option.label,
              onClick: () => field.onChange(option.value),
            }))}
            textAlign="start"
            menuAlign="start"
          />
        )}
      />

      {frequencyType === "WEEKLY" && (
        <Controller
          name="weekDays"
          control={control}
          rules={{
            validate: (value) =>
              (value && value.length > 0) || "최소 하나의 요일을 선택해주세요",
          }}
          render={({ field }) => (
            <DaysSelector
              value={field.value || []}
              onChange={field.onChange}
              className="mt-2"
            />
          )}
        />
      )}
      {frequencyType === "WEEKLY" && errors.weekDays && (
        <span className="text-sm text-red-500">{errors.weekDays.message}</span>
      )}
    </div>
  );
};

export default TaskFrequencyField;
