import instance from "@/utils/axios";

const deleteGroup = async (groupId: number) => {
  try {
    const response = await instance.delete(`/groups/${groupId}`);

    if (!response) throw new Error("요청에 실패했습니다.");

    return response.data;
  } catch (error) {
    throw error;
  }
};

export default deleteGroup;
