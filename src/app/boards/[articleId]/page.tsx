"use client";

import { useGetArticleDetail } from "@/hooks/api/articles/use-get-article-detail";
import ArticleHeader from "./_components/article-header/article-header";
import ArticleContents from "./_components/article-contents/article-contents";
import ArticleComments from "./_components/article-comments/article-comments";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const articleId = params.articleId;

  const { data, isPending } = useGetArticleDetail(Number(articleId));

  if (isPending) return <div>로딩중...</div>;

  const articleData = data?.article;

  return (
    <main className="mx-auto my-[68px] w-full max-w-[343px] rounded-[20px] bg-white tablet:max-w-[620px] pc:max-w-[900px]">
      <article className="px-[20px] py-[88px] tablet:px-[40px] pc:px-[60px]">
        <ArticleHeader article={articleData} />
        <ArticleContents article={articleData} />
        <ArticleComments
          article={articleData}
          comments={data?.comments?.list || []}
        />
      </article>
    </main>
  );
}
