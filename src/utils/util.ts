import { FREQUENCIES } from "@/constants/frequencies";

const VALID_CODES = ["ONCE", "DAILY", "WEEKLY", "MONTHLY"] as const;
type FrequencyCodes = (typeof VALID_CODES)[number];

/**
 * @author hwitae
 * @description 전달받은 문자열이 할 일 반복 코드와 일치하는지 체크합니다.
 * @param frequencyCode
 * @returns boolean
 */
export const isFrequencyCode = (
  frequencyCode: string
): frequencyCode is FrequencyCodes => {
  if (typeof frequencyCode !== "string") {
    return false;
  }

  return (VALID_CODES as readonly string[]).includes(frequencyCode);
};

/**
 * @author hwitae
 * @description frequencyCode가 올바른지 확인하고 변환합니다.
 * @param repeatCode 반복 코드 ONCE | DAILY | WEEKLY | MONTHLY
 * @returns "한 번" | "매일 반복" | "매주 반복" | "매월 반복"
 */
export const changeFrequencyCode = (frequencyCode: string) => {
  if (isFrequencyCode(frequencyCode)) return FREQUENCIES[frequencyCode];
  return FREQUENCIES["ONCE"];
};
