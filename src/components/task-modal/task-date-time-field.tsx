import { Calendar, CalendarTime } from "@/components/index";
import { TaskFormData } from "@/types/task-modal.types";
import { Control, Controller, FieldErrors } from "react-hook-form";

interface TaskDateTimeFieldProps {
  control: Control<TaskFormData>;
  errors: FieldErrors<TaskFormData>;
  showCalendar: boolean;
  showTime: boolean;
  formatTime12Hour: (time: string) => string;
  toggleCalendar: () => void;
  toggleTime: () => void;
  setShowCalendar: (show: boolean) => void;
  setShowTime: (show: boolean) => void;
}

const TaskDateTimeField = ({
  control,
  errors,
  showCalendar,
  showTime,
  formatTime12Hour,
  toggleCalendar,
  toggleTime,
  setShowCalendar,
  setShowTime,
}: TaskDateTimeFieldProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-lg font-medium text-blue-700">
        시작 날짜 및 시간
      </label>
      <div className="flex gap-2">
        <Controller
          name="startDate"
          control={control}
          rules={{ required: "날짜를 선택해주세요" }}
          render={({ field }) => (
            <button
              type="button"
              onClick={toggleCalendar}
              className="h-12 flex-1 rounded-lg border border-gray-300 px-4 text-left text-md text-gray-800 hover:border-blue-500 focus:border-blue-500 focus:text-blue-700 focus:outline-none"
            >
              {field.value
                ? field.value.toLocaleDateString("ko-KR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "날짜"}
            </button>
          )}
        />

        <Controller
          name="startTime"
          control={control}
          rules={{ required: "시간을 선택해주세요" }}
          render={({ field }) => (
            <button
              type="button"
              onClick={toggleTime}
              className="h-12 w-[124px] rounded-lg border border-gray-300 px-4 text-left text-md text-gray-800 hover:border-blue-500 focus:border-blue-500 focus:text-blue-700 focus:outline-none"
            >
              {formatTime12Hour(field.value)}
            </button>
          )}
        />
      </div>

      <Controller
        name="startDate"
        control={control}
        render={({ field }) => (
          <div className={showCalendar ? "mt-2" : "hidden"}>
            <Calendar
              onDayClick={(date) => {
                field.onChange(date);
                setShowCalendar(false);
              }}
            />
          </div>
        )}
      />

      <Controller
        name="startTime"
        control={control}
        render={({ field }) => (
          <div className={showTime ? "mt-2" : "hidden"}>
            <CalendarTime
              onSelect={(formattedTime) => {
                field.onChange(formattedTime);
                setShowTime(false);
              }}
            />
          </div>
        )}
      />

      {(errors.startDate || errors.startTime) && (
        <span className="text-sm text-red-500">
          날짜와 시간을 모두 선택해주세요
        </span>
      )}
    </div>
  );
};

export default TaskDateTimeField;
