import { useMutation, useQueryClient } from "@tanstack/react-query";
import patchArticlesComment from "@/api/articles/patch-articles-comment";
import useToast from "@/hooks/use-toast";

const usePatchArticleComment = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: ({
      commentId,
      content,
    }: {
      commentId: number;
      content: string;
    }) => patchArticlesComment(commentId, content),
    onSuccess: () => {
      toast.success("댓글이 수정되었습니다 !");
      queryClient.invalidateQueries({
        queryKey: ["articleDetail"],
      });
    },
    onError: () => {
      toast.error("댓글 수정에 실패했습니다 !");
    },
  });
};

export default usePatchArticleComment;
