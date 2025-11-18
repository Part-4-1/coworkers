import { useQuery } from "@tanstack/react-query";
import instance from "@/utils/axios";

export const useGetArticleDetail = (articleId: number) => {
  return useQuery({
    queryKey: ["articleDetail", articleId],
    queryFn: async () => {
      const [articleRes, commentsRes] = await Promise.all([
        instance.get(`/articles/${articleId}`),
        instance.get(`/articles/${articleId}/comments?limit=10`),
      ]);

      return {
        article: articleRes.data,
        comments: commentsRes.data,
      };
    },
    placeholderData: (previousData) => previousData,
  });
};
