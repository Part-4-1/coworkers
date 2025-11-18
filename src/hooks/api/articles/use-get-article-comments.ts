import { useInfiniteQuery } from "@tanstack/react-query";
import getArticlesComments from "@/api/articles/get-article-comments";

interface UseGetArticleCommentsParams {
  articleId: number;
}

const useGetArticleComments = ({ articleId }: UseGetArticleCommentsParams) => {
  return useInfiniteQuery({
    queryKey: ["articleComments", articleId],
    queryFn: ({ pageParam }) =>
      getArticlesComments({
        articleId,
        cursor: pageParam,
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
};

export default useGetArticleComments;
