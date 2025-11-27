"use client";

import { useEffect } from "react";
import { useGetArticleDetail } from "@/hooks/api/articles/use-get-article-detail";
import ArticleHeader from "./article-header/article-header";
import ArticleContents from "./article-contents/article-contents";
import ArticleComments from "./article-comments/article-comments";
import { ArticleDetailSkeleton } from "@/components";
import { notFound } from "next/navigation";
import { Article } from "@/types/article";

interface ArticleDetailClientProps {
  articleId: number;
  initialData?: Article | null;
}

export default function ArticleDetailClient({
  articleId,
  initialData,
}: ArticleDetailClientProps) {
  const { data, isPending, isError } = useGetArticleDetail(articleId);

  useEffect(() => {
    if (initialData?.title) {
      document.title = initialData.title;
    }
  }, [initialData]);

  if (initialData && isPending) {
    const articleData = initialData;

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

  if (isPending) return <ArticleDetailSkeleton />;

  if (isError || !data?.article) {
    return notFound();
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
