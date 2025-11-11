import instance from "@/utils/axios";

export interface PatchData {
  name: string | undefined;
  description: string | undefined;
  done: boolean;
}

const patchTaskDetail = async (
  groupId: number,
  taskListId: number,
  taskId: number,
  data: PatchData
) => {
  try {
    const response = await instance.patch(
      `/groups/${groupId}/task-lists/${taskListId}/tasks/${taskId}`,
      data
    );

    if (!response) throw new Error("데이터를 불러오지 못했습니다.");

    return response;
  } catch (error) {
    console.error(error);
  }
};

export default patchTaskDetail;
