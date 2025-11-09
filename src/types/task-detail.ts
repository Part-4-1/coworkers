import type { CommentWriter } from "./comment";

export type FrequencyType = "DAILY" | "WEEKLY" | "MONTHLY" | "ONCE";

export interface TaskDetailHeaderProps {
  name: string;
  writer: CommentWriter;
  createdAt: string;
  frequency: FrequencyType;
  doneAt: string | null;
}

export interface TaskDetailProps extends TaskDetailHeaderProps {}
