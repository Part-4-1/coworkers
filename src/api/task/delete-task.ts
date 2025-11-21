import instance from "@/utils/axios";

interface DeleteTaskParams {
  groupId: number;
  taskListId: number;
  taskId: number;
}

const deleteTask = async ({
  groupId,
  taskListId,
  taskId,
}: DeleteTaskParams) => {
  try {
    const response = await instance.delete(
      `groups/${groupId}/task-lists/${taskListId}/tasks/${taskId}`
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export default deleteTask;
