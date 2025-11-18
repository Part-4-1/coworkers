import { useMutation, useQueryClient } from "@tanstack/react-query";
import postArticles from "@/api/articles/post-articles";
import useToast from "@/hooks/use-toast";

export const usePostArticle = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: postArticles,
    onSuccess: () => {
      toast.success("게시글이 등록되었습니다 !");
      queryClient.invalidateQueries({ queryKey: ["articles"] });
    },
    onError: () => {
      toast.error("게시글 등록에 실패했습니다 !");
    },
  });
};
