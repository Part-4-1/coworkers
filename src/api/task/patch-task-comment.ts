import instance from "@/utils/axios";

interface PatchTaskCommentParams {
  taskId: number;
  commentId: number;
  content: string;
}

const patchTaskComment = async ({
  taskId,
  commentId,
  content,
}: PatchTaskCommentParams) => {
  const response = await instance.patch(
    `/tasks/${taskId}/comments/${commentId}`,
    { content }
  );

  return response.data;
};

export default patchTaskComment;
