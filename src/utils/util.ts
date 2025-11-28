import { FREQUENCIES } from "@/constants/frequencies";
import { MonthlyTaskList, Task, TasksDone } from "@/types/task";

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
 * @description 할 일 목록을 월별로 분리합니다.
 * @param tasks 할 일 목록
 * @returns MonthlyTaskList[]
 */
export const getMonthlyTaskList = (
  tasks: TasksDone[] | undefined
): MonthlyTaskList[] => {
  if (!tasks) return [];

  const sortedTasks = tasks.sort((a, b) => {
    return new Date(b.doneAt).getTime() - new Date(a.doneAt).getTime();
  });

  let prevDoneDate = "";

  const monthlyTaskList = sortedTasks.map((task) => {
    let doneDate = task.doneAt.slice(0, 10);

    if (prevDoneDate !== doneDate) {
      prevDoneDate = doneDate;

      return {
        date: task.doneAt,
        tasks: tasks.filter((task) => task.doneAt.slice(0, 10) === doneDate),
      };
    }
  });

  return monthlyTaskList
    .filter((item): item is MonthlyTaskList => item !== undefined)
    .reverse();
};
