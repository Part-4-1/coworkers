import cn from "@/utils/clsx";
import type { CSSProperties } from "react";
import { useState } from "react";
import {
  DayEventHandler,
  DayPicker,
  getDefaultClassNames,
} from "react-day-picker";
import { ko } from "react-day-picker/locale";
import "react-day-picker/style.css";
import Icon from "../icon/Icon";

/**
 * @author jinhyuk
 * @description 날짜를 선택할 수 있는 단일 선택형 캘린더 컴포넌트입니다.
 * @param {Function} onDayClick - 날짜 클릭 시 실행되는 콜백 함수 (선택된 날짜를 반환)
 * @example
 * <Calendar onDayClick={(date) => setDate(date)} />
 *
 */

interface CalendarProps {
  onDayClick?: (date: Date) => void;
}

const Calendar = ({ onDayClick }: CalendarProps) => {
  const [selected, setSelected] = useState<Date | undefined>();
  const handleSelect: DayEventHandler<React.MouseEvent> = (day, modifier) => {
    if (modifier.today) {
    }
    setSelected(day);
    onDayClick?.(day);
  };
  const defaultClassNames = getDefaultClassNames();
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onDayClick={handleSelect}
      navLayout="around"
      locale={ko}
      animate
      showOutsideDays
      components={{
        PreviousMonthButton: (props) => (
          <button {...props}>
            <Icon icon="leftTriangleArrow" />
          </button>
        ),
        NextMonthButton: (props) => (
          <button {...props}>
            <Icon icon="rightTriangleArrow" />
          </button>
        ),
      }}
      classNames={{
        month_caption: cn(
          defaultClassNames.month_caption,
          "!text-md !font-medium"
        ),
        weekdays: cn(defaultClassNames.weekdays, "text-gray-700"),
        outside: cn(defaultClassNames.outside, "text-gray-700 !text-md"),
        day_button: cn(
          defaultClassNames.day_button,
          "!text-md !w-[32px] !h-[32px]"
        ),
        weekday: cn(defaultClassNames.weekday, "!py-[6px]"),
        day: cn("p-0"),
        today: cn(defaultClassNames.today, "text-blue-200 "),
        selected: cn("bg-blue-200 !text-white rounded-[8px] !font-normal"),
      }}
      className="min-w-[282px] rounded-[24px] border-2 border-blue-300 p-[16px] flex-center"
      style={
        {
          "--rdp-nav-height": "32px",
          "--rdp-today-color": "#5189FA",
        } as CSSProperties
      }
    />
  );
};

export default Calendar;
