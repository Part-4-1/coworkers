"use client";

import {
  TextInput,
  InputBox,
  Button,
  Dropdown,
  Calendar,
  CalendarTime,
} from "@/components/index";
import { useState } from "react";

const TaskModal = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");

  // 24시간 형식을 12시간 형식 + 오전/오후로 변환
  const formatTime12Hour = (time24: string) => {
    if (!time24) return "시간";

    const [hours, minutes] = time24.split(":").map(Number);
    const period = hours < 12 ? "오전" : "오후";
    const hours12 = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;

    return `${period} ${hours12}:${minutes.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex w-full max-w-[336px] flex-col gap-6">
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
          placeholder="할 일 제목을 입력해주세요."
          className="placeholder:text-md placeholder:text-gray-800"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text- font-medium text-blue-700">
          시작 날짜 및 시간
        </label>
        <div className="flex gap-2">
          <button
            onClick={() => {
              setShowCalendar(!showCalendar);
              setShowTime(false);
            }}
            className="h-12 flex-1 rounded-lg border border-gray-300 px-4 text-left text-md text-gray-800 hover:border-blue-500 focus:border-blue-500 focus:text-blue-700 focus:outline-none"
          >
            {selectedDate
              ? selectedDate.toLocaleDateString("ko-KR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "날짜"}
          </button>

          <button
            onClick={() => {
              setShowTime(!showTime);
              setShowCalendar(false);
            }}
            className="h-12 w-[124px] rounded-lg border border-gray-300 px-4 text-left text-md text-gray-800 hover:border-blue-500 focus:border-blue-500 focus:text-blue-700 focus:outline-none"
          >
            {formatTime12Hour(selectedTime)}
          </button>
        </div>

        <div className={showCalendar ? "mt-2" : "hidden"}>
          <Calendar
            onDayClick={(date) => {
              setSelectedDate(date);
              setShowCalendar(false);
            }}
          />
        </div>

        <div className={showTime ? "mt-2" : "hidden"}>
          <CalendarTime
            onSelect={(formattedTime) => {
              setSelectedTime(formattedTime);
              setShowTime(false);
            }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="taskTitle" className="text- font-medium text-blue-700">
          반복 설정
        </label>
        <Dropdown
          items={[
            { label: "한 번" },
            { label: "매일" },
            { label: "주 반복" },
            { label: "월 반복" },
          ]}
          textAlign="start"
          menuAlign="start"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="taskTitle" className="text- font-medium text-blue-700">
          할 일 메모
        </label>
        <InputBox
          className="placeholder:text-gray-800"
          placeholder="메모를 입력해주세요."
        />
      </div>

      <Button>만들기</Button>
    </div>
  );
};

export default TaskModal;
