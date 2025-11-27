import instance from "@/utils/axios";
import { Article } from "@/types/article";

const getArticleDetail = async (articleId: number): Promise<Article | null> => {
  try {
    const response = await instance.get(`/articles/${articleId}`);

    if (!response) throw new Error("데이터를 불러오지 못했습니다.");

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getArticleDetail;
