"use client";

import { useEffect } from "react";
import cn from "@/utils/clsx";
import { useGetArticleDetail } from "@/hooks/api/articles/use-get-article-detail";
import { ArticleEditSkeleton } from "@/components";
import ArticleEditContents from "./article-edit-contents/article-edit-contents";
import { notFound } from "next/navigation";
import { Article } from "@/types/article";

interface ArticleEditClientProps {
  articleId: number;
  initialData?: Article | null;
}

export default function ArticleEditClient({
  articleId,
  initialData,
}: ArticleEditClientProps) {
  const { data, isPending } = useGetArticleDetail(articleId);

  useEffect(() => {
    if (initialData?.title) {
      document.title = `${initialData.title} 수정`;
    }
  }, [initialData]);

  if (initialData && isPending) {
    return (
      <div
        className={cn(
          "mx-auto mt-[36px] w-full max-w-[343px] rounded-[20px] bg-white",
          "tablet:mt-[117px] tablet:max-w-[620px]",
          "pc:mt-[100px] pc:max-w-[900px]"
        )}
      >
        <ArticleEditContents article={initialData} />
      </div>
    );
  }

  if (isPending) return <ArticleEditSkeleton />;

  if (!data?.article) {
    notFound();
  }

  return (
    <div
      className={cn(
        "mx-auto mt-[36px] w-full max-w-[343px] rounded-[20px] bg-white",
        "tablet:mt-[117px] tablet:max-w-[620px]",
        "pc:mt-[100px] pc:max-w-[900px]"
      )}
    >
      <ArticleEditContents article={data.article} />
    </div>
  );
}
