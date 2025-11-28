import { TaskList } from "@/types/taskList";
import instance from "@/utils/axios";

export const fetchTaskList = async (
  groupId: number,
  taskListId: number,
  token: string
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/groups/${groupId}/task-lists/${taskListId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getTaskList = async (
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
