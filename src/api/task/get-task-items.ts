import { TaskList } from "@/types/taskList";
import instance from "@/utils/axios";

const getTaskItems = async (
  groupId: number,
  taskListId: number,
  date: string
): Promise<TaskList> => {
  try {
    const response = await instance.get(
      `/groups/${groupId}/task-lists/${taskListId}/tasks?date=${date}`
    );

    if (!response) throw new Error("데이터를 불러오지 못했습니다.");

    return response.data;
  } catch (error) {
    throw error;
  }
};

export default getTaskItems;
