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

  return (
    <PostCard
      {...article}
      content={content}
      isBest={isBest}
      className={className}
    />
  );
};

export default BoardsArticleWrapper;
