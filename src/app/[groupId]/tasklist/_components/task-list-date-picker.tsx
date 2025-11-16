import { Button, Calendar, Icon } from "@/components";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import {
  getCurrentSunday,
  getNextSunday,
  getPrevSunday,
  getWeek,
} from "@/utils/date-util";
import dynamic from "next/dynamic";

interface TaskListDatePickerProps {
  name: string;
  selectedDate: Date | null;
  setSelectedDate: Dispatch<SetStateAction<Date | null>>;
}

const DynamicDatePickerList = dynamic(
  () => import("@/app/[groupId]/tasklist/_components/date-picker-list"),
  { ssr: false, loading: () => <div>date picker loading ...</div> }
);

const TaskListDatePicker = ({
  name,
  selectedDate,
  setSelectedDate,
}: TaskListDatePickerProps) => {
  const [currentSunday, setCurrentSunday] = useState<Date | null>(null);
  const [week, setWeek] = useState<number[] | null>(null);
  const [day, setDay] = useState<string>("");
  const [showCalendar, setShowCalendar] = useState(false);

  const initDate = (date: Date) => {
    const sunday = getCurrentSunday(date);
    setDay(date.getDate().toString());
    setCurrentSunday(sunday);
    setWeek(getWeek(sunday));
    setSelectedDate(date);
  };

  const handleChangeDay = (e: ChangeEvent<HTMLInputElement>) => {
    if (!currentSunday) return;
    setDay(e.target.value);
    const newDate = new Date(currentSunday);
    newDate.setDate(Number(e.target.value));
    setSelectedDate(newDate);
  };

  const handleClickNextWeek = () => {
    if (!currentSunday) return;
    setCurrentSunday(getNextSunday(currentSunday));
  };

  const handleClickPrevWeek = () => {
    if (!currentSunday) return;
    setCurrentSunday(getPrevSunday(currentSunday));
  };

  useEffect(() => {
    initDate(new Date());
  }, []);

  useEffect(() => {
    if (!currentSunday) return;
    setWeek(getWeek(currentSunday));
  }, [currentSunday]);

  return (
    <div className="flex w-full flex-col gap-6 px-4 pt-[38px]">
      <div className="relative flex items-center justify-between">
        <span className="text-2lg font-bold text-blue-700 tablet:text-xl">
          {name}
        </span>
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium text-blue-700 tablet:text-lg">
            {currentSunday
              ? `${currentSunday.getFullYear()}년 ${currentSunday.getMonth() + 1}월`
              : "date loading..."}
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
          <Button
            variant="none"
            className="h-6 w-6 rounded-full bg-gray-50"
            onClick={() => setShowCalendar((prevState) => !prevState)}
          >
            <Icon icon="calendar" className="h-3 w-3 text-gray-800" />
          </Button>
        </div>
        {showCalendar && (
          <div className="absolute right-px top-8 bg-white">
            <Calendar onDayClick={(value) => initDate(value)} />
          </div>
        )}
      </div>

      <DynamicDatePickerList
        dateList={week}
        checkedDay={day}
        handleChangeDay={handleChangeDay}
      />
    </div>
  );
};

export default TaskListDatePicker;
