import instance from "@/utils/axios";
import { notFound } from "next/navigation";

export const fetchTaskDetail = async (
  groupId: number,
  taskListId: number,
  taskId: number,
  token: string
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/groups/${groupId}/task-lists/${taskListId}/tasks/${taskId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 404) notFound();

    return response.json();
  } catch (error) {
    throw error;
  }
};

/**
 * @author hwitae
 * @description 할 일 상세 정보를 조회합니다.
 * @param taskId 할 일 ID
 */
export const getTaskDetail = async (
  groupId: number,
  taskListId: number,
  taskId: number
) => {
  try {
    const response = await instance.get(
      `/groups/${groupId}/task-lists/${taskListId}/tasks/${taskId}`
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
