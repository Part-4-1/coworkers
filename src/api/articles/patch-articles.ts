import instance from "@/utils/axios";

interface PatchArticleData {
  title: string;
  content: string;
  image?: string | null;
}
const patchArticle = async (articleId: number, data: PatchArticleData) => {
  try {
    const response = await instance.patch(`/articles/${articleId}`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default patchArticle;
