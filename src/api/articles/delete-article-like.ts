import instance from "@/utils/axios";

const deleteArticleLike = async (articleId: number) => {
  const response = await instance.delete(`/articles/${articleId}/like`);
  return response.data;
};

export default deleteArticleLike;
