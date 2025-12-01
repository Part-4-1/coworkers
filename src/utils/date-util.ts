/**
 * @author hwitae
 * @param timestamp 타임스탬프
 * @description 타임스탬프 날짜 형식을 0000. 00. 00으로 변경합니다.
 * @returns string
 */
export const toDotDateString = (timestamp: string) => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}. ${month}. ${day}`;
};

export const toKoreanDateString = (timestamp: string) => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1);
  const day = String(date.getDate());

  return `${year}년 ${month}월 ${day}일`;
};

/**
 * @author hwitae
 * @param timestamp 타임스탬프
 * @description 타임스탬프 날짜 형식을 0000년 00월 00일 오전/오후 0:00 형태로 변경합니다.
 * @returns string
 */
export const toKoreanDateWithTimeString = (timestamp: string) => {
  const date = new Date(timestamp);
  const time = date.toLocaleTimeString("ko-KR", {
    hour: "numeric",
    minute: "numeric",
  });

  return `${toKoreanDateString(timestamp)} ${time}`;
};

/**
 * @author hwitae
 * @description 이번 주 일요일 날짜를 반환한다.
 * @returns Date
 */
export const getCurrentSunday = (date: Date) => {
  const currentSunday = new Date(date);
  currentSunday.setDate(date.getDate() - date.getDay());
  currentSunday.setHours(0, 0, 0, 0);
  return currentSunday;
};

/**
 * @author hwitae
 * @description 다음주 일요일 날짜를 반환합니다.
 * @param currentSunday 현재 일요일 Date 객체
 * @returns Date
 */
export const getNextSunday = (currentSunday: Date) => {
  const nextSunday = new Date(currentSunday);
  nextSunday.setDate(currentSunday.getDate() + 7);
  nextSunday.setHours(0, 0, 0, 0);
  return nextSunday;
};

/**
 * @author hwitae
 * @description 저번주 일요일 날짜를 반환합니다.
 * @param currentSunday 현재 일요일 Date 객체
 * @returns Date
 */
export const getPrevSunday = (currentSunday: Date) => {
  const prevSunday = new Date(currentSunday);
  prevSunday.setDate(currentSunday.getDate() - 7);
  prevSunday.setHours(0, 0, 0, 0);
  return prevSunday;
};

/**
 * @author hwitae
 * @description 오늘 날짜를 포함한 일주일 배열 반환
 * @param sunday 이번 주 일요일 날짜를 담은 Date 객체
 * @returns number[]
 */
export const getWeek = (sunday: Date): number[] => {
  const week = Array.from({ length: 7 }, (_, index) => {
    const nextDay = new Date(sunday);
    nextDay.setDate(sunday.getDate() + index);
    return nextDay.getDate();
  });
  return week;
};

/**
 * @author hwitae
 * @description Date 객체를 받아 yyyy년 mm월 dd일 (요일) 형식으로 표출합니다
 * @param Date
 */
export const formatDateWithDay = (dateString: string) => {
  if (!dateString) return "";

  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayOfWeek = date.toLocaleString("ko-KR", { weekday: "short" });
  return `${year}년 ${month}월 ${day}일 (${dayOfWeek})`;
};
