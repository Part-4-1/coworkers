import { FrequencyType } from "@/types/task";

/**
 * @author hwitae
 * @description frequencyCode를 변환합니다.
 * @param repeatCode 반복 코드 ONCE | DAILY | WEEKLY | MONTHLY
 * @returns "한 번" | "매일 반복" | "매주 반복" | "매월 반복"
 */
export const changeFrequencyCode = (frequencyCode: FrequencyType): string => {
  const frequencies = {
    ONCE: "한 번",
    DAILY: "매일 반복",
    WEEKLY: "매주 반복",
    MONTHLY: "매월 반복",
  };

  return frequencies[frequencyCode];
};
