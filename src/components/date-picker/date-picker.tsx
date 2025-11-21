import cn from "@/utils/clsx";
import { ChangeEvent } from "react";

export interface DatePickerProps {
  day: string;
  date: number;
  checkedDay: string;
  handleChangeDay: (e: ChangeEvent<HTMLInputElement>) => void;
}

const DatePicker = ({
  day,
  date,
  checkedDay,
  handleChangeDay,
}: DatePickerProps) => {
  return (
    <div className="w-full">
      <input
        id={date.toString()}
        type="radio"
        className="peer hidden"
        name="date-picker"
        value={date.toString()}
        checked={date.toString() === checkedDay}
        onChange={handleChangeDay}
      />
      <label
        htmlFor={date.toString()}
        className={cn(
          "cursor-pointer gap-[2px] rounded-lg border border-gray-300 py-2 flex-col-center",
          "peer-checked:border-blue-700 peer-checked:bg-blue-700",
          "tablet:gap-1 tablet:rounded-xl tablet:px-4 tablet:py-3",
          `[--day-color:#64748B] peer-checked:[--day-color:white]`,
          `[--date-color:#1E293B] peer-checked:[--date-color:white]`
        )}
      >
        <span className="text-xs font-medium text-[--day-color] tablet:text-sm">
          {day}
        </span>
        <span className="text-md font-semibold text-[--date-color] tablet:text-xl">
          {date}
        </span>
      </label>
    </div>
  );
};

export default DatePicker;
