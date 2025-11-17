import type { User, Writer } from "./user";

export type FrequencyType = "DAILY" | "WEEKLY" | "MONTHLY" | "ONCE";

export const Frequency_Map = {
  DAILY: "매일 반복",
  WEEKLY: "매주 반복",
  MONTHLY: "매월 반복",
  ONCE: "한 번",
};

interface DoneBy {
  user: Writer | null;
}

export interface Task {
  id: number;
  name: string;
  description: string | null;
  date: string;
  doneAt: string | null;
  updatedAt: string;
  recurringId: number;
  writer: Writer;
  doneBy: DoneBy;
  commentCount: number;
  frequency: string;
  displayIndex: number | null;
  deletedAt: string | null;
}
