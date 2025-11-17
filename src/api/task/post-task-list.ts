import instance from "@/utils/axios";

interface PostTaskListData {
  groupId: number;
  name: string;
}

const postTaskList = async ({ groupId, name }: PostTaskListData) => {
  try {
    const response = await instance.post(`/groups/${groupId}/task-list$`, {
      name,
    });

    if (!response) throw new Error("요청에 실패했습니다.");

    return response.data;
  } catch (error) {
    throw error;
  }
};

export default postTaskList;
