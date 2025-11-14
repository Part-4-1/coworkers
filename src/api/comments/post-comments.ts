import instance from "@/utils/axios";

export interface CreateCommentPayload {
  content: string;
  taskId: number;
}

export const createComment = async (payload: CreateCommentPayload) => {
  const { taskId, content } = payload;
  const { data } = await instance.post(`tasks/${taskId}/comments`, { content });
  return data;
};
