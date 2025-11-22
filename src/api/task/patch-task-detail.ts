import { PatchTaskDetailData } from "@/hooks/api/task/use-patch-task-detail";
import { TaskDetailData } from "@/types/task-detail";
import instance from "@/utils/axios";

export interface PatchData {
  name: string | undefined;
  description: string | undefined;
  done: boolean;
}

const patchTaskDetail = async ({
  groupId,
  taskListId,
  taskId,
  data,
}: PatchTaskDetailData): Promise<TaskDetailData> => {
  try {
    console.log(groupId);
    console.log(taskListId);
    console.log(taskId);
    console.log(data);

    const response = await instance.patch(
      `/groups/${groupId}/task-lists/${taskListId}/tasks/${taskId}`,
      data
    );

    if (!response) throw new Error("데이터를 불러오지 못했습니다.");

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default patchTaskDetail;
