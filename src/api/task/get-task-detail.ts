import instance from "@/utils/axios";

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
