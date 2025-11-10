import type { CommentWriter } from "./comment";
import { FrequencyType } from "./task";

export interface TaskDetailHeaderProps {
  name: string;
  writer: CommentWriter;
  createdAt: string;
  frequency: FrequencyType;
  doneAt: string | null;
}

export interface TaskDetailProps extends TaskDetailHeaderProps {}
