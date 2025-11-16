import { useMutation, useQueryClient } from "@tanstack/react-query";
import postArticlesComment from "@/api/articles/post-articles-comment";
import useToast from "@/hooks/use-toast";

export const usePostArticleComment = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: ({ articleId, data }: { articleId: number; data: any }) =>
      postArticlesComment(articleId, data),
    onSuccess: (_, variables) => {
      toast.success("댓글이 등록되었습니다 !");
      queryClient.invalidateQueries({
        queryKey: ["articleDetail", variables.articleId],
      });
    },
    onError: () => {
      toast.error("댓글 등록에 실패했습니다 !");
    },
  });
};
