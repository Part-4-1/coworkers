"use client";

import { Button, Icon } from "@/components";
import { ChangeEvent } from "react";
import DatePickerList from "./date-picker-list";

interface TaskListDatePickerProps {
  name: string;
  currentSunday: Date | null;
  week: number[] | null;
  day: string;
  handleChangeDay: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClickNextWeek: () => void;
  handleClickPrevWeek: () => void;
}

const TaskListDatePicker = ({
  name,
  currentSunday,
  week,
  day,
  handleChangeDay,
  handleClickNextWeek,
  handleClickPrevWeek,
}: TaskListDatePickerProps) => {
  return (
    <div className="flex w-full flex-col gap-6 px-4 pt-[38px]">
      <div className="flex items-center justify-between">
        <span className="text-2lg font-bold text-blue-700 tablet:text-xl">
          {name}
        </span>
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium text-blue-700 tablet:text-lg">
            {currentSunday &&
              `${currentSunday.getFullYear()}년 ${currentSunday.getMonth() + 1}월`}
          </p>
          <div className="flex items-center gap-1">
            <Button
              variant="none"
              className="h-4 w-4 rounded-full border border-gray-300 bg-white"
              onClick={handleClickPrevWeek}
            >
              <Icon icon="leftArrow" className="h-3 w-3 text-gray-800" />
            </Button>
            <Button
              variant="none"
              className="h-4 w-4 rounded-full border border-gray-300 bg-white"
              onClick={handleClickNextWeek}
            >
              <Icon icon="rightArrow" className="h-3 w-3 text-gray-800" />
            </Button>
          </div>
          <Button variant="none" className="h-6 w-6 rounded-full bg-gray-50">
            <Icon icon="calendar" className="h-3 w-3 text-gray-800" />
          </Button>
        </div>
      </div>
      <DatePickerList
        dateList={week}
        checkedDay={day}
        handleChangeDay={handleChangeDay}
      />
    </div>
  );
};

export default TaskListDatePicker;
