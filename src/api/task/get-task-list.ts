import { TaskList } from "@/types/taskList";
import instance from "@/utils/axios";

const getTaskList = async (
  groupId: number,
  taskId: number
): Promise<TaskList> => {
  try {
    const response = await instance(`/groups/${groupId}/task-lists/${taskId}`);

    if (!response) throw Error("데이터를 불러오지 못했습니다.");

    return response.data;
  } catch (error) {
    throw error;
  }
};

export default getTaskList;
