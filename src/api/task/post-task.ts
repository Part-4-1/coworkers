import instance from "@/utils/axios";
import { CreateTaskPayload } from "@/types/task-modal.types";

interface CreateTaskParams {
  groupId: number;
  taskListId: number;
}

export const createTask = async (
  params: CreateTaskParams,
  payload: CreateTaskPayload
) => {
  const { groupId, taskListId } = params;
  const { data } = await instance.post(
    `/groups/${groupId}/task-lists/${taskListId}/tasks`,
    payload
  );
  return data;
};
