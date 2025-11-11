import { RecurringData } from "./recurring";
import { Writer } from "./user";

/**
 * @author hwitae
 * @description 할 일 상세 정보 API 타입
 */
export interface TaskDetailData {
  id: number;
  updatedAt: string;
  date: string;
  doneAt: string | null;
  recurringId: number;
  name: string;
  description: string;
  frequency: string;
  deletedAt: string | null;
  displayIndex: number;
  recurring: RecurringData;
  writer: Writer;
  doneBy: Writer;
  commentCount: number;
}
