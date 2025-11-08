/**
 * @author jinhyuk
 * @description 타임스탬프 날짜 형식을 0000년 0월 0일으로 변경합니다.
 * @param timestamp - 변환할 Date 객체
 * @returns 예: "2025년 11월 9일"
 */
export const formatDate = (timestamp: Date): string => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}년 ${month}월 ${day}일`;
};
