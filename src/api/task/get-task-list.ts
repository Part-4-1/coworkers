import { TaskList } from "@/types/taskList";
import instance from "@/utils/axios";

const getTaskList = async (
  groupId: number,
  taskListId: number,
  date?: string
): Promise<TaskList> => {
  try {
    const response = await instance(
      `/groups/${groupId}/task-lists/${taskListId}${date ? `?date=${date}` : ""}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default getTaskList;
