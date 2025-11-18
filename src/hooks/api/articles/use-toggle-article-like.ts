import { useMutation, useQueryClient } from "@tanstack/react-query";
import postArticleLike from "@/api/articles/post-article-like";
import deleteArticleLike from "@/api/articles/delete-article-like";
import { Article } from "@/types/article";
import useToast from "@/hooks/use-toast";

interface ArticleDetailData {
  article: Article;
  comments: any;
}

interface ArticlesListData {
  totalCount: number;
  list: Article[];
}

const useToggleArticleLike = (articleId: number) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: (isLiked: boolean) =>
      isLiked ? deleteArticleLike(articleId) : postArticleLike(articleId),

    onMutate: async (isLiked: boolean) => {
      await queryClient.cancelQueries({
        queryKey: ["articleDetail", articleId],
      });
      await queryClient.cancelQueries({ queryKey: ["articles"] });

      const previousDetail = queryClient.getQueryData<ArticleDetailData>([
        "articleDetail",
        articleId,
      ]);

      if (previousDetail) {
        queryClient.setQueryData<ArticleDetailData>(
          ["articleDetail", articleId],
          {
            ...previousDetail,
            article: {
              ...previousDetail.article,
              isLiked: !isLiked,
              likeCount: isLiked
                ? previousDetail.article.likeCount - 1
                : previousDetail.article.likeCount + 1,
            },
          }
        );
      }

      queryClient.setQueriesData<ArticlesListData>(
        { queryKey: ["articles"] },
        (oldData) => {
          if (!oldData) return oldData;
          return {
            ...oldData,
            list: oldData.list.map((article) =>
              article.id === articleId
                ? {
                    ...article,
                    isLiked: !isLiked,
                    likeCount: isLiked
                      ? article.likeCount - 1
                      : article.likeCount + 1,
                  }
                : article
            ),
          };
        }
      );

      return { previousDetail };
    },

    onError: (err, isLiked, context) => {
      if (context?.previousDetail) {
        queryClient.setQueryData(
          ["articleDetail", articleId],
          context.previousDetail
        );
      }
      queryClient.invalidateQueries({ queryKey: ["articles"] });
      toast.error("좋아요 처리에 실패했습니다.");
    },
  });
};

export default useToggleArticleLike;
