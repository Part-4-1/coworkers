import instance from "@/utils/axios";

interface CreateArticleData {
  title: string;
  content: string;
  image?: string | null;
}

const postArticles = async (data: CreateArticleData) => {
  try {
    const response = await instance.post("/articles", data);

    if (!response) throw new Error("데이터를 불러오지 못했습니다.");

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default postArticles;
