import { useQuery } from "@tanstack/react-query";
import instance from "@/utils/axios";
import { Article } from "@/types/article";

export const useGetArticleDetail = (articleId: number) => {
  return useQuery<{ article: Article }>({
    queryKey: ["articleDetail", articleId],
    queryFn: async () => {
      const response = await instance.get(`/articles/${articleId}`);
      return {
        article: response.data,
      };
    },
    placeholderData: (previousData) => previousData,
    retry: (failureCount, error: any) => {
      if (error?.response?.status >= 400 && error?.response?.status < 500) {
        return false;
      }
      return failureCount < 3;
    },
  });
};
