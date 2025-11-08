import type { User } from "./user";

type FrequencyType = "DAILY" | "WEEKLY" | "MONTHLY" | "ONCE";

export const Frequency_Map = {
  DAILY: "매일 반복",
  WEEKLY: "매주 반복",
  MONTHLY: "매월 반복",
  ONCE: "한 번",
};

interface DoneBy {
  user: User | null;
}

export interface Task {
  id: number;
  name: string;
  description?: string;
  date: string;
  doneAt: string | null;
  updatedAt?: string;
  recurringId?: number | null;
  writer?: User;
  doneBy?: DoneBy | null;
  commentCount: number;
  frequency: FrequencyType;
}
