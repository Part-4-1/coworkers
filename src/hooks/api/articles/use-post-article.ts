import { useMutation } from "@tanstack/react-query";
import postArticles from "@/api/articles/post-articles";

export const usePostArticle = () => {
  return useMutation({
    mutationFn: postArticles,
  });
};
