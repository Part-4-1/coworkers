import { Button, Icon } from "@/components";
import { toKoreanDateString, toKoreanYearMonth } from "@/utils/date-util";
import { Dispatch, SetStateAction } from "react";

interface HistoryDatePickerProps {
  selectedDate: Date | null;
  setSelectedDate: Dispatch<SetStateAction<Date | null>>;
}

const HistoryDatePicker = ({
  selectedDate,
  setSelectedDate,
}: HistoryDatePickerProps) => {
  return (
    <div className="flex-center">
      <div className="mr-auto h-6 w-6"></div>
      <div className="flex items-center gap-[13px]">
        <Button
          variant="none"
          className="h-4 w-4 rounded-full border border-gray-300 bg-white"
          // onClick={}
        >
          <Icon icon="leftArrow" className="h-3 w-3 text-gray-800" />
        </Button>
        <p className="text-2lg font-bold">{toKoreanYearMonth(selectedDate)}</p>
        <Button
          variant="none"
          className="h-4 w-4 rounded-full border border-gray-300 bg-white"
          // onClick={}
        >
          <Icon icon="rightArrow" className="h-3 w-3 text-gray-800" />
        </Button>
      </div>
      <Button
        variant="none"
        className="ml-auto h-6 w-6 rounded-full bg-gray-50"
      >
        <Icon icon="calendar" className="h-3 w-3 text-gray-800" />
      </Button>
    </div>
  );
};

export default HistoryDatePicker;
