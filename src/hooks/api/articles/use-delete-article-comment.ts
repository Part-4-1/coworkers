import { useMutation, useQueryClient } from "@tanstack/react-query";
import deleteArticlesComment from "@/api/articles/delete-articles-comment";
import useToast from "@/hooks/use-toast";

const useDeleteArticleComment = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: ({
      commentId,
      articleId,
    }: {
      commentId: number;
      articleId: number;
    }) => deleteArticlesComment(commentId),
    onSuccess: (_, variables) => {
      toast.success("댓글이 삭제되었습니다 !");
      queryClient.invalidateQueries({
        queryKey: ["articleDetail", variables.articleId],
      });
      queryClient.invalidateQueries({
        queryKey: ["articleComments", variables.articleId],
      });
    },
    onError: () => {
      toast.error("댓글 삭제에 실패했습니다 !");
    },
  });
};

export default useDeleteArticleComment;
