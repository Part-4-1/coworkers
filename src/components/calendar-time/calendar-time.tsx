"use client";

import { Button } from "@/components/index";
import { TIME_LIST } from "@/constants/time-list";
import cn from "@/utils/clsx";
import { useEffect, useState } from "react";

interface CalendarTimeProps {
  onSelect?: (timeData: { isAm: boolean; time: string }) => void;
  selectedTimeData?: {
    isAm: boolean;
    time: string;
  };
}

const CalendarTime = ({ onSelect, selectedTimeData }: CalendarTimeProps) => {
  const [isAm, setIsAm] = useState(true);
  const [selectedTime, setSelectedTime] = useState(TIME_LIST[0]);
  useEffect(() => {
    if (selectedTimeData) {
      setIsAm(selectedTimeData.isAm);
      setSelectedTime(selectedTimeData.time);
    }
  }, [selectedTimeData]);

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
    onSelect?.({ isAm: isAm, time: time });
  };

  const handleAmPmClick = (nextIsAm: boolean) => {
    setIsAm(nextIsAm);
    onSelect?.({ isAm: nextIsAm, time: selectedTime });
  };

  return (
    <div className="flex h-[176px] min-w-[288px] gap-[14px] rounded-[12px] border-[1px] border-blue-300 p-[12px]">
      <div>
        <Button
          onClick={() => handleAmPmClick(true)}
          variant="outlined-secondary"
          className={cn(
            "mb-[8px] h-[40px] w-[78px] border-[1px] border-gray-300 text-md font-medium",
            isAm ? "bg-blue-200 text-white" : "bg-white text-gray-800"
          )}
        >
          오전
        </Button>
        <Button
          onClick={() => handleAmPmClick(false)}
          variant="outlined-secondary"
          className={cn(
            "h-[40px] w-[78px] border-[1px] border-gray-300 text-md font-medium",
            isAm ? "bg-white text-gray-800" : "bg-blue-200 text-white"
          )}
        >
          오후
        </Button>
      </div>

      <div className="w-full">
        <div className="h-full rounded-[12px] border border-gray-300 py-[8px] pl-[16px]">
          <div className="time-calendar-scrollbar mr-[8px] h-full overflow-y-auto">
            <ul>
              {TIME_LIST.map((time) => (
                <li
                  key={time}
                  onClick={() => handleTimeClick(time)}
                  className={cn(
                    "flex h-[34px] cursor-pointer items-center text-lg font-normal",
                    time === selectedTime ? "text-blue-300" : "text-gray-800"
                  )}
                >
                  {time}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarTime;
