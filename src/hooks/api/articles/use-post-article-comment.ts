import { useMutation, useQueryClient } from "@tanstack/react-query";
import postArticlesComment from "@/api/articles/post-articles-comment";

export const usePostArticleComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ articleId, data }: { articleId: number; data: any }) =>
      postArticlesComment(articleId, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["articleDetail", variables.articleId],
      });
    },
  });
};
