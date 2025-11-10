"use client";

import {
  TextInput,
  InputBox,
  Button,
  Dropdown,
  Calendar,
  CalendarTime,
} from "@/components/index";
import DaysSelector from "./task-modal-day-selector";
import { useForm, Controller } from "react-hook-form";
import { useState, useMemo } from "react";

const REPEAT_OPTIONS = [
  { label: "한 번", value: "ONCE" },
  { label: "매일", value: "DAILY" },
  { label: "주 반복", value: "WEEKLY" },
  { label: "월 반복", value: "MONTHLY" },
];

type FrequencyType = "ONCE" | "DAILY" | "WEEKLY" | "MONTHLY";

interface TaskFormData {
  name: string;
  description: string;
  startDate: Date | null;
  startTime: string;
  frequencyType: FrequencyType;
  weekDays: number[];
}

interface TaskModalProps {
  onSubmit?: (data: any) => void;
  className?: string;
}

const TaskModal = ({ onSubmit: onSubmitProp, className }: TaskModalProps) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [showTime, setShowTime] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<TaskFormData>({
    defaultValues: {
      name: "",
      description: "",
      startDate: null,
      startTime: "",
      frequencyType: "ONCE",
      weekDays: [],
    },
  });

  const frequencyType = watch("frequencyType");
  const startDate = watch("startDate");
  const startTime = watch("startTime");

  const formatTime12Hour = (time24: string) => {
    if (!time24) return "시간";

    const [hours, minutes] = time24.split(":").map(Number);
    const period = hours < 12 ? "오전" : "오후";
    const hours12 = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;

    return `${period} ${hours12}:${minutes.toString().padStart(2, "0")}`;
  };

  const createTimestamp = (date: Date | null, time: string): string | null => {
    if (!date || !time) return null;

    const [hours, minutes] = time.split(":").map(Number);
    const dateTime = new Date(date);
    dateTime.setHours(hours, minutes, 0, 0);

    return dateTime.toISOString();
  };

  const onSubmit = (data: TaskFormData) => {
    const timestamp = createTimestamp(data.startDate, data.startTime);

    if (!timestamp) {
      alert("날짜와 시간을 모두 선택해주세요.");
      return;
    }

    const payload: any = {
      name: data.name,
      description: data.description,
      startDate: timestamp,
      frequencyType: data.frequencyType,
    };

    if (data.frequencyType === "DAILY") {
      payload.weekDays = [0, 1, 2, 3, 4, 5, 6];
    } else if (data.frequencyType === "WEEKLY") {
      payload.weekDays = data.weekDays;
    } else if (data.frequencyType === "MONTHLY") {
      payload.monthDay = data.startDate!.getDate();
    }

    console.log("전송 데이터:", payload);
    onSubmitProp?.(payload);
  };

  const getRepeatLabel = (value: FrequencyType) => {
    return REPEAT_OPTIONS.find((opt) => opt.value === value)?.label || "한 번";
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-[336px] flex-col gap-6"
    >
      <div className="gap-4 flex-col-center">
        <h2 className="text-lg font-bold text-blue-700">할 일 만들기</h2>
        <div className="flex-col-center">
          <p className="text-md text-gray-800">
            할 일은 실제로 행동 가능한 작업 중심으로
          </p>
          <p className="text-md text-gray-800">작성해주시면 좋습니다.</p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="taskTitle" className="text- font-medium text-blue-700">
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

      <div className="flex flex-col gap-2">
        <label className="text- font-medium text-blue-700">
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
                onClick={() => {
                  setShowCalendar(!showCalendar);
                  setShowTime(false);
                }}
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
                onClick={() => {
                  setShowTime(!showTime);
                  setShowCalendar(false);
                }}
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

      <div className="flex flex-col gap-2">
        <label className="text- font-medium text-blue-700">반복 설정</label>
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
                value.length > 0 || "최소 하나의 요일을 선택해주세요",
            }}
            render={({ field }) => (
              <DaysSelector
                value={field.value}
                onChange={field.onChange}
                className="mt-2"
              />
            )}
          />
        )}
        {frequencyType === "WEEKLY" && errors.weekDays && (
          <span className="text-sm text-red-500">
            {errors.weekDays.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="taskMemo" className="text- font-medium text-blue-700">
          할 일 메모
        </label>
        <InputBox
          id="taskMemo"
          {...register("description")}
          className="placeholder:text-gray-800"
          placeholder="메모를 입력해주세요."
        />
      </div>

      <Button type="submit">만들기</Button>
    </form>
  );
};

export default TaskModal;
