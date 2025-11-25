import { CalendarListSkeleton, DatePicker } from "@/components";
import { ChangeEvent } from "react";

interface DatePickerListProps {
  dateList: number[] | null;
  checkedDay: string;
  handleChangeDay: (e: ChangeEvent<HTMLInputElement>) => void;
}

const DAYS = ["일", "월", "화", "수", "목", "금", "토"];

const DatePickerList = ({
  dateList,
  checkedDay = "",
  handleChangeDay,
}: DatePickerListProps) => {
  if (!dateList) {
    return <CalendarListSkeleton />;
  }

  return (
    <ul className="flex w-full items-center gap-1 tablet:gap-2 pc:gap-3">
      {dateList.map((date, idx) => {
        return (
          <li key={DAYS[idx]} className="flex-1">
            <DatePicker
              day={DAYS[idx]}
              date={date}
              checkedDay={checkedDay}
              handleChangeDay={handleChangeDay}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default DatePickerList;
