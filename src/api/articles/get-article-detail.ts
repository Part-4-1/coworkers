import axios from "axios";
import { Article } from "@/types/article";

const getArticleDetail = async (
  articleId: number,
  accessToken?: string
): Promise<Article | null> => {
  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (accessToken) {
      headers.Authorization = `Bearer ${accessToken}`;
    }

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/articles/${articleId}`,
      { headers }
    );

    if (!response) throw new Error("데이터를 불러오지 못했습니다.");

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getArticleDetail;
