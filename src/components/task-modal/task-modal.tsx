"use client";

import { Button } from "@/components/index";
import { useTaskForm } from "@/hooks/use-task-form";
import { useCreateTask } from "@/hooks/api/task/use-create-task";
import { TaskFormData } from "@/types/task-modal.types";
import {
  TaskModalHeader,
  TaskNameField,
  TaskDateTimeField,
  TaskFrequencyField,
  TaskMemoField,
} from "./index";
import cn from "@/utils/clsx";

interface TaskModalProps {
  groupId: number;
  taskListId: number;
  onSuccess?: () => void;
  className?: string;
}

const TaskModal = ({
  groupId,
  taskListId,
  onSuccess,
  className,
}: TaskModalProps) => {
  const {
    form: {
      register,
      handleSubmit,
      control,
      watch,
      formState: { errors },
    },
    reset,
    frequencyType,
    showCalendar,
    showTime,
    formatTime12Hour,
    transformToPayload,
    toggleCalendar,
    toggleTime,
    setShowCalendar,
    setShowTime,
  } = useTaskForm();

  const date = watch("startDate")?.toLocaleDateString("sv-SE") || "";

  const { mutate: createTask, isPending } = useCreateTask({
    groupId,
    taskListId,
    date,
  });

  const onSubmit = (data: TaskFormData) => {
    const payload = transformToPayload(data);
    if (!payload) return;

    createTask(payload, {
      onSuccess: () => {
        reset();
        close();
        onSuccess?.();
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("flex w-full flex-col gap-6", className)}
    >
      <TaskModalHeader />

      <TaskNameField register={register} errors={errors} />

      <TaskDateTimeField
        control={control}
        errors={errors}
        showCalendar={showCalendar}
        showTime={showTime}
        formatTime12Hour={formatTime12Hour}
        toggleCalendar={toggleCalendar}
        toggleTime={toggleTime}
        setShowCalendar={setShowCalendar}
        setShowTime={setShowTime}
      />

      <TaskFrequencyField
        control={control}
        frequencyType={frequencyType}
        errors={errors}
      />

      <TaskMemoField register={register} />

      <Button type="submit" disabled={isPending}>
        {isPending ? "생성 중..." : "만들기"}
      </Button>
    </form>
  );
};

export default TaskModal;
