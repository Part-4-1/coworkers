// @ts-ignore - badwords-ko has no type definitions
import Filter from "badwords-ko";
import { customProfanityWords } from "@/constants/custom-profanity";

const filter = new Filter();

if (customProfanityWords.length > 0) {
  filter.addWords(...customProfanityWords);
}

/**
 * 텍스트에서 욕설을 *로 치환하는 함수
 * @param text 필터링할 텍스트
 * @returns 욕설이 *로 치환된 텍스트
 */
export const filterProfanity = (text: string): string => {
  return filter.clean(text);
};

/**
 * 텍스트에 욕설이 포함되어 있는지 확인하는 함수
 * @param text 확인할 텍스트
 * @returns 욕설 포함 여부
 */
export const hasProfanity = (text: string): boolean => {
  return filter.isProfane(text);
};

/**
 * 사용자 정의 욕설을 추가하는 함수
 * @param words 추가할 욕설 단어 배열
 */
export const addBadWords = (words: string[]): void => {
  filter.addWords(...words);
};

/**
 * 욕설 목록에서 단어를 제거하는 함수
 * @param words 제거할 단어 배열
 */
export const removeBadWords = (words: string[]): void => {
  filter.removeWords(...words);
};
