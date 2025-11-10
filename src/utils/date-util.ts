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
