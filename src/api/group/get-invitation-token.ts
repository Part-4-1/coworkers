import instance from "@/utils/axios";

const getInvitationToken = async (groupId: number) => {
  try {
    const response = await instance(`/groups/${groupId}/invitation`);
    if (!response) {
      throw Error("데이터를 불러오지 못했습니다.");
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default getInvitationToken;
