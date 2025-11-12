import { FrequencyType } from "./task";

export interface CreateTaskPayload {
  name: string;
  description: string;
  startDate: string;
  frequencyType: FrequencyType;
  weekDays?: number[];
  monthDay?: number;
}

export interface TaskFormData {
  name: string;
  description: string;
  startDate: Date | null;
  startTime: string;
  frequencyType: FrequencyType;
  weekDays?: number[];
}
