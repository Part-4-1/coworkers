import instance from "@/utils/axios";
import { User } from "@/types/user";

export const getUserInfo = async (): Promise<User> => {
  const response = await instance.get<User>(`/user`);
  return response.data;
};
