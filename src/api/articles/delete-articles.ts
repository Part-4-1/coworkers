import instance from "@/utils/axios";
import { ca } from "react-day-picker/locale";

export const deleteArticle = async (articleId: number) => {
  try {
    const response = await instance.delete(`/articles/${articleId}`);

    if (!response) throw new Error("데이터를 삭제하지 못했습니다.");

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
