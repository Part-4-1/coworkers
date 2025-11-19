import { Group } from "@/types/group";
import instance from "@/utils/axios";

const getGroupInfo = async (id: number): Promise<Group> => {
  try {
    const response = await instance(`/groups/${id}`);

    if (!response) throw Error("데이터를 불러오지 못했습니다.");

    return response.data;
  } catch (error) {
    throw error;
  }
};

export default getGroupInfo;
