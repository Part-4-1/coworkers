"use client";

import { useState, useEffect } from "react";

interface DaysSelectorProps {
  value?: number[];
  onChange?: (days: number[]) => void;
  className?: string;
}

const DAYS = [
  { label: "일", value: 0 },
  { label: "월", value: 1 },
  { label: "화", value: 2 },
  { label: "수", value: 3 },
  { label: "목", value: 4 },
  { label: "금", value: 5 },
  { label: "토", value: 6 },
];

const DaysSelector = ({
  value = [],
  onChange,
  className,
}: DaysSelectorProps) => {
  const [selectedDays, setSelectedDays] = useState<number[]>(value);

  useEffect(() => {
    setSelectedDays(value);
  }, [value]);

  const handleDayClick = (dayValue: number) => {
    const newSelectedDays = selectedDays.includes(dayValue)
      ? selectedDays.filter((d) => d !== dayValue)
      : [...selectedDays, dayValue];

    setSelectedDays(newSelectedDays);
    onChange?.(newSelectedDays);
  };

  return (
    <div className={className}>
      <div className="flex gap-2">
        {DAYS.map((day) => (
          <button
            key={day.value}
            type="button"
            onClick={() => handleDayClick(day.value)}
            className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-md font-medium transition-colors ${
              selectedDays.includes(day.value)
                ? "bg-blue-200 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-blue-100"
            } `}
          >
            {day.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DaysSelector;
