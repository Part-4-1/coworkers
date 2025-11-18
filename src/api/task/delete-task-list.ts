import instance from "@/utils/axios";

const deleteTaskList = async ({
  groupId,
  taskListId,
}: {
  groupId: number;
  taskListId: number;
}) => {
  try {
    const response = await instance.delete(
      `/groups/${groupId}/task-lists/${taskListId}`
    );

    if (!response) throw new Error("요청에 실패했습니다.");

    return response.data;
  } catch (error) {
    throw error;
  }
};

export default deleteTaskList;
