"use client";

import { useParams } from "next/navigation";
import { useGetArticleDetail } from "@/hooks/api/articles/use-get-article-detail";
import { ArticleEditSkeleton } from "@/components";
import ArticleEditContents from "./_components/article-edit-contents/article-edit-contents";

export default function EditPage() {
  const params = useParams();
  const articleId = params.articleId;

  const { data, isPending } = useGetArticleDetail(Number(articleId));

  if (isPending) return <ArticleEditSkeleton />;

  if (!data?.article) return <div>게시글을 찾을 수 없습니다.</div>;

  return (
    <div className="mx-auto my-[36px] w-full max-w-[343px] rounded-[20px] bg-white tablet:mb-[137px] tablet:mt-[117px] tablet:max-w-[620px] pc:my-[100px] pc:max-w-[900px]">
      <ArticleEditContents article={data.article} />
    </div>
  );
}
