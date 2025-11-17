import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteArticle } from "@/api/articles/delete-articles";

export const useDeleteArticle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteArticle,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["articles"],
      });
    },
  });
};
