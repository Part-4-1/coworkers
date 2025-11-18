import instance from "@/utils/axios";

interface PostArticleCommentData {
  content: string;
}

const postArticlesComment = async (
  articleId: number,
  data: PostArticleCommentData
) => {
  try {
    const response = await instance.post(
      `/articles/${articleId}/comments`,
      data
    );

    if (!response) throw new Error("댓글을 서버로 전송하지 못했습니다.");

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default postArticlesComment;
