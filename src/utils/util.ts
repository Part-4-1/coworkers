import { FREQUENCIES } from "@/constants/frequencies";
import { Task, TasksDone } from "@/types/task";
import { TaskList } from "@/types/taskList";

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

export const countDoneTask = (tasks: Task[]) => {
  let count = 0;
  tasks.forEach((value) => value.doneAt && count++);
  return count;
};

/**
 * @author hwitae
 * @description 완료된 할 일 리스트에서 해당 할 일 리스트 ID와 선택된 날짜의 할 일 리스트를 반환합니다.
 * @param list 완료된 할 일 리스트
 * @param taskListId 할 일 리스트 ID
 * @param selectedDate 선택된 날짜
 * @returns 할 일 리스트
 */
export const getDoneTaskList = (
  list: TaskList | undefined,
  taskListId: number,
  selectedDate: Date | null
) => {
  if (!list?.tasks) return [];

  const doneTaskList = list?.tasks.filter((task) => {
    return (
      list.id === taskListId &&
      task.doneAt?.split("T")[0] === selectedDate?.toLocaleDateString("sv-SE")
    );
  });
  return doneTaskList;
};
