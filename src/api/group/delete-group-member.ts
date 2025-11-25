import instance from "@/utils/axios";

const deleteGroupMember = async (groupId: number, userId: number) => {
  try {
    const response = await instance.delete(
      `/groups/${groupId}/member/${userId}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default deleteGroupMember;
