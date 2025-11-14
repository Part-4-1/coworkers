import instance from "@/utils/axios";

/**
 * @author hwitae
 * @description 할 일 상세 정보를 조회합니다.
 * @param taskId 할 일 ID
 */
const getTaskDetail = async (
  groupId: number,
  taskListId: number,
  taskId: number
) => {
  try {
    const response = await instance.get(
      `/groups/${groupId}/task-lists/${taskListId}/tasks/${taskId}`
    );

    if (!response) throw new Error("데이터를 불러오지 못했습니다.");

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getTaskDetail;
