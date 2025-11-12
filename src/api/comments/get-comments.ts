import { CommentListResponse } from "@/types";
import instance from "@/utils/axios";
import { AxiosResponse } from "axios";

const getComments = async (
  taskId: number
): Promise<AxiosResponse<CommentListResponse> | undefined> => {
  try {
    const response = await instance.get(`/tasks/${taskId}/comments`);

    if (!response) throw new Error("데이터를 불러오지 못했습니다.");

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getComments;
