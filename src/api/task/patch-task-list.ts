import instance from "@/utils/axios";

const patchTaskList = async ({
  groupId,
  taskListId,
  name,
}: {
  groupId: number;
  taskListId: number;
  name: string;
}) => {
  try {
    const response = await instance.patch(
      `/groups/${groupId}/task-lists/${taskListId}`,
      { name }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export default patchTaskList;
