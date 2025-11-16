import instance from "@/utils/axios";

const deleteArticlesComment = async (commentId: number) => {
  try {
    const response = await instance.delete(`/comments/${commentId}`);

    if (!response) throw new Error("댓글을 삭제하지 못했습니다.");

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default deleteArticlesComment;
