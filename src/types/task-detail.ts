import type { CommentWriter } from "./comment";

export interface TaskDetailHeaderProps {
  name: string;
  writer: CommentWriter;
  createdAt: string;
  frequency: string;
}

export interface TaskDetailProps extends TaskDetailHeaderProps {}
