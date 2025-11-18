import instance from "@/utils/axios";
import { CommentListResponse } from "@/types/comment";

interface GetArticleCommentsParams {
  articleId: number;
  limit: number;
  cursor?: number;
}

const getArticleComments = async ({
  articleId,
  limit,
  cursor,
}: GetArticleCommentsParams): Promise<CommentListResponse> => {
  try {
    const response = await instance.get(`/articles/${articleId}/comments`, {
      params: {
        limit,
        cursor,
      },
    });

    if (!response) throw new Error("댓글을 불러오지 못했습니다.");

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getArticleComments;
