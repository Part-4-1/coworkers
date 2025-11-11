import { FrequencyType } from "./task";

/**
 * @author hwitae
 * @description recurring 데이터 타입입니다.
 */
export interface RecurringData {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  startDate: string;
  frequencyType: FrequencyType;
  weekDays: number[];
  monthDay: number | null;
  taskListId: number;
  groupId: number;
  writerId: number;
}
