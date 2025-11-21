import instance from "@/utils/axios";

const getUserGroups = async () => {
  try {
    const response = await instance.get(`/user/groups`);

    if (!response) throw new Error("데이터를 불러오지 못했습니다.");

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getUserGroups;
