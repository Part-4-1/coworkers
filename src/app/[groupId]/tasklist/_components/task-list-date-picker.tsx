import { Button, Calendar, Icon, TaskModal } from "@/components";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  getCurrentSunday,
  getNextSunday,
  getPrevSunday,
  getWeek,
} from "@/utils/date-util";
import DatePickerList from "@/app/[groupId]/tasklist/_components/date-picker-list";
import { useSearchParams } from "next/navigation";
import useGetTaskList from "@/hooks/api/task/use-get-task-list";
import usePrompt from "@/hooks/use-prompt";
import useClickOutside from "@/hooks/click-outside/use-click-outside";

interface TaskListDatePickerProps {
  groupId: number;
  taskListId: number;
  setSelectedDate: Dispatch<SetStateAction<Date | null>>;
}

const TaskListDatePicker = ({
  groupId,
  taskListId,
  setSelectedDate,
}: TaskListDatePickerProps) => {
  const [currentSunday, setCurrentSunday] = useState<Date | null>(null);
  const [week, setWeek] = useState<number[] | null>(null);
  const [day, setDay] = useState<string>("");
  const [showCalendar, setShowCalendar] = useState(false);
  const listId = useSearchParams().get("list");
  const { data: taskListData, isPending } = useGetTaskList(
    groupId,
    Number(listId)
  );
  const { Modal, openPrompt, closePrompt } = usePrompt();
  const calendarRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(calendarRef, () => setShowCalendar(false), showCalendar);

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
    <div className="flex w-full flex-col gap-6 tablet:gap-8">
      <div className="relative flex items-center justify-between">
        <span className="text-2lg font-bold text-blue-700 tablet:text-xl">
          {taskListData?.name}
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
          <div className="absolute right-px top-8 bg-white" ref={calendarRef}>
            <Calendar onDayClick={(value) => initDate(value)} />
          </div>
        )}
      </div>
      <Button
        className="fixed bottom-10 right-[13%] z-20 h-14 w-14 rounded-full"
        onClick={openPrompt}
      >
        <Icon icon="plus" className="h-6 w-6" />
      </Button>
      <DatePickerList
        dateList={week}
        checkedDay={day}
        handleChangeDay={handleChangeDay}
      />
      <Modal>
        <TaskModal
          groupId={groupId}
          taskListId={taskListId}
          className="px-2 pt-8"
          onSuccess={closePrompt}
        />
      </Modal>
    </div>
  );
};

export default TaskListDatePicker;
