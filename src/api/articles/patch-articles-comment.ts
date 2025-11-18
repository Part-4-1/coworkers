import instance from "@/utils/axios";

const patchArticlesComment = async (commentId: number, content: string) => {
  try {
    const response = await instance.patch(`/comments/${commentId}`, {
      content,
    });

    if (!response) throw new Error("수정된 댓글을 서버로 전송하지 못했습니다.");

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default patchArticlesComment;
