import instance from "@/utils/axios";
import { CreateGroupResponse } from "@/types/group";

interface PostGroupData {
  image?: string;
  name: string;
}
const postGroup = async (data: PostGroupData): Promise<CreateGroupResponse> => {
  const response = await instance.post("/groups", data);
  return response.data;
};

export default postGroup;
