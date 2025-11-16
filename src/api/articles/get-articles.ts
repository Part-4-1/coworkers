import instance from "@/utils/axios";

interface GetArticle {
  page?: number;
  pageSize?: number;
  orderBy?: string;
  keyword?: string;
}

export const getArticles = async (params?: GetArticle) => {
  try {
    const response = await instance.get("/articles", { params });

    if (!response) throw new Error("데이터를 불러오지 못했습니다.");

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
