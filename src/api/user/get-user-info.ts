import instance from "@/utils/axios";
import { User } from "@/types/user";

export const getUserInfo = async (): Promise<User | undefined> => {
  const response = await instance.get<User>(`/user`);

  return response.data;
};
