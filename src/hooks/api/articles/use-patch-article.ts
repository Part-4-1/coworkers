import { useMutation, useQueryClient } from "@tanstack/react-query";
import patchArticle from "@/api/articles/patch-articles";
import useToast from "@/hooks/use-toast";

const usePatchArticle = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: ({ articleId, data }: { articleId: number; data: any }) =>
      patchArticle(articleId, data),
    onSuccess: () => {
      toast.success("게시글이 수정되었습니다 !");
      queryClient.invalidateQueries({ queryKey: ["articles"] });
      queryClient.invalidateQueries({ queryKey: ["articleDetail"] });
    },
    onError: () => {
      toast.error("게시글 수정에 실패했습니다 !");
    },
  });
};

export default usePatchArticle;
