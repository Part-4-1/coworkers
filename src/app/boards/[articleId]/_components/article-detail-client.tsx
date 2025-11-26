"use client";

import { useGetArticleDetail } from "@/hooks/api/articles/use-get-article-detail";
import ArticleHeader from "./article-header/article-header";
import ArticleContents from "./article-contents/article-contents";
import ArticleComments from "./article-comments/article-comments";
import { ArticleDetailSkeleton } from "@/components";
import { notFound } from "next/navigation";

interface ArticleDetailClientProps {
  articleId: number;
}

export default function ArticleDetailClient({
  articleId,
}: ArticleDetailClientProps) {
  const { data, isPending, isError } = useGetArticleDetail(articleId);

  if (isPending) return <ArticleDetailSkeleton />;

  if (isError || !data?.article) {
    notFound();
  }

  const articleData = data.article;

  return (
    <main className="mx-auto mt-[16px] w-full max-w-[343px] rounded-[20px] bg-white tablet:mt-[68px] tablet:max-w-[620px] pc:max-w-[900px]">
      <article className="px-[20px] py-[40px] pc:px-[60px]">
        <ArticleHeader article={articleData} />
        <ArticleContents article={articleData} />
        <ArticleComments article={articleData} />
      </article>
    </main>
  );
}
