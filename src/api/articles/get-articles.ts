import instance from "@/utils/axios";

interface GetArticle {
  page?: number;
  pageSize?: number;
  orderBy?: string;
  keyword?: string;
}

export const getArticles = async (params?: GetArticle) => {
  const response = await instance.get("/articles", { params });
  return response.data;
};
