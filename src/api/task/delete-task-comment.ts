import instance from "@/utils/axios";

const deleteTaskComment = async ({
  taskId,
  commentId,
}: {
  taskId: number;
  commentId: number;
}) => {
  const response = await instance.delete(
    `/tasks/${taskId}/comments/${commentId}`
  );

  return response.data;
};

export default deleteTaskComment;
