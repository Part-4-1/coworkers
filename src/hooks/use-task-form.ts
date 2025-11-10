"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { TaskFormData, CreateTaskPayload } from "@/types/task-modal.types";
import useToast from "@/hooks/use-toast";

export const useTaskForm = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const toast = useToast();

  const form = useForm<TaskFormData>({
    defaultValues: {
      name: "",
      description: "",
      startDate: null,
      startTime: "",
      frequencyType: "ONCE",
      weekDays: undefined,
    },
  });

  const frequencyType = form.watch("frequencyType");
  const { reset } = form;

  const createTimestamp = (date: Date | null, time: string): string | null => {
    if (!date || !time) return null;
    const [hours, minutes] = time.split(":").map(Number);
    const dateTime = new Date(date);
    dateTime.setHours(hours, minutes, 0, 0);
    return dateTime.toISOString();
  };

  const formatTime12Hour = (time24: string) => {
    if (!time24) return "시간";
    const [hours, minutes] = time24.split(":").map(Number);
    const period = hours < 12 ? "오전" : "오후";
    const hours12 = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
    return `${period} ${hours12}:${minutes.toString().padStart(2, "0")}`;
  };

  const transformToPayload = (data: TaskFormData): CreateTaskPayload | null => {
    const timestamp = createTimestamp(data.startDate, data.startTime);

    if (!timestamp) {
      toast.error("날짜와 시간을 모두 선택해주세요.");
      return null;
    }

    const payload: CreateTaskPayload = {
      name: data.name,
      description: data.description,
      startDate: timestamp,
      frequencyType: data.frequencyType,
    };

    if (data.frequencyType === "DAILY") {
      payload.weekDays = [0, 1, 2, 3, 4, 5, 6];
    } else if (data.frequencyType === "WEEKLY") {
      if (!data.weekDays || data.weekDays.length === 0) {
        toast.error("최소 하나의 요일을 선택해주세요.");
        return null;
      }
      payload.weekDays = data.weekDays;
    } else if (data.frequencyType === "MONTHLY") {
      payload.monthDay = data.startDate!.getDate();
    }
    return payload;
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
    setShowTime(false);
  };

  const toggleTime = () => {
    setShowTime(!showTime);
    setShowCalendar(false);
  };

  return {
    form,
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
  };
};
