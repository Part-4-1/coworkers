import instance from "@/utils/axios";

const postArticleLike = async (articleId: number) => {
  const response = await instance.post(`/articles/${articleId}/like`, {});
  return response.data;
};

export default postArticleLike;
