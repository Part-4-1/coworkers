// hooks/api/use-update-article.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import patchArticle from "@/api/articles/patch-articles";

const usePatchArticle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      articleId,
      data,
    }: {
      articleId: string | number;
      data: any;
    }) => patchArticle(Number(articleId), data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
      queryClient.invalidateQueries({ queryKey: ["articleDetail"] });
    },
  });
};

export default usePatchArticle;
