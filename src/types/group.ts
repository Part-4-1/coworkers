/**
 * @author leohan
 * @description 그룹 관련 타입
 */

import { Member } from "./members";
import { TaskList } from "./taskList";

export interface Group {
  id: number;
  teamId: string;
  name: string;
  image: string | null;
  createdAt: string;
  updatedAt: string;
  members: Member[];
  taskLists: TaskList[];
}
