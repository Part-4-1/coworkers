import { TaskDetailComments } from "@/types/task-detail";
import instance from "@/utils/axios";

const getComments = async (taskId: number): Promise<TaskDetailComments[]> => {
  try {
    const response = await instance.get(`/tasks/${taskId}/comments`);

    if (!response) throw new Error("데이터를 불러오지 못했습니다.");

    return response.data;
  } catch (error) {
    throw error;
  }
};

export default getComments;
