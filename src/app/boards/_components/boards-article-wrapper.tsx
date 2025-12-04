"use client";

import { PostCard } from "@/components/index";
import { Article } from "@/types/article";
import { useGetArticleDetail } from "@/hooks/api/articles/use-get-article-detail";

interface BoardsArticleWrapperProps {
  article: Article;
  isBest?: boolean;
  className?: string;
}

const BoardsArticleWrapper = ({
  article,
  isBest = false,
  className,
}: BoardsArticleWrapperProps) => {
  const { data } = useGetArticleDetail(article.id);
  const content = data?.article?.content || article.title;
  const isLiked = data?.article?.isLiked ?? article.isLiked;

  return (
    <PostCard
      {...article}
      content={content}
      isLiked={isLiked}
      isBest={isBest}
      className={className}
    />
  );
};

export default BoardsArticleWrapper;
