"use client";

import { Button, Icon } from "@/components";

interface TaskListDatePickerProps {
  name: string;
}

const date = new Date();

const TaskListDatePicker = ({ name }: TaskListDatePickerProps) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  return (
    <div className="px-4">
      <div className="flex items-center justify-between">
        <span className="text-2lg font-bold text-blue-700 tablet:text-xl">
          {name}
        </span>
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium text-blue-700 tablet:text-lg">
            {year}년 {month}월
          </p>
          <div className="flex items-center gap-1">
            <Button
              variant="none"
              className="h-4 w-4 rounded-full border border-gray-300 bg-white"
            >
              <Icon icon="leftArrow" className="h-3 w-3 text-gray-800" />
            </Button>
            <Button
              variant="none"
              className="h-4 w-4 rounded-full border border-gray-300 bg-white"
            >
              <Icon icon="rightArrow" className="h-3 w-3 text-gray-800" />
            </Button>
          </div>
          <Button variant="none" className="h-6 w-6 rounded-full bg-gray-50">
            <Icon icon="calendar" className="h-3 w-3 text-gray-800" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TaskListDatePicker;
