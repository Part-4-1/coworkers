import { History } from "@/types/user";
import instance from "@/utils/axios";

const getUserHistory = async (): Promise<History> => {
  try {
    const response = await instance.get("/user/history");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default getUserHistory;
