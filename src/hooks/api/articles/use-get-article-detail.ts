import { useQuery } from "@tanstack/react-query";
import instance from "@/utils/axios";

export const useGetArticleDetail = (articleId: number) => {
  return useQuery({
    queryKey: ["articleDetail", articleId],
    queryFn: async () => {
      const response = await instance.get(`/articles/${articleId}`);
      return {
        article: response.data,
      };
    },
    placeholderData: (previousData) => previousData,
  });
};
