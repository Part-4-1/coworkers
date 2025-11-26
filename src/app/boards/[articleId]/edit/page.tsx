"use client";

import cn from "@/utils/clsx";
import { useParams } from "next/navigation";
import { useGetArticleDetail } from "@/hooks/api/articles/use-get-article-detail";
import { ArticleEditSkeleton } from "@/components";
import ArticleEditContents from "./_components/article-edit-contents/article-edit-contents";
import { notFound } from "next/navigation";

export default function EditPage() {
  const params = useParams();
  const articleId = params.articleId;

  const { data, isPending } = useGetArticleDetail(Number(articleId));

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
