import { PatchGroupResponse } from "@/types/group";
import instance from "@/utils/axios";

export interface PatchGroupData {
  name: string;
  image: string | null;
}

const patchGroup = async (
  groupId: number,
  data: PatchGroupData
): Promise<PatchGroupResponse> => {
  const response = await instance.patch(`/groups/${groupId}`, data);
  return response.data;
};

export default patchGroup;
