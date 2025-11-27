import type { Metadata } from "next";
import ArticleDetailClient from "./_components/article-detail-client";
import getArticleDetail from "@/api/articles/get-article-detail";

interface PageProps {
  params: Promise<{ articleId: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { articleId } = await params;
  const article = await getArticleDetail(Number(articleId));

  if (!article) {
    return {
      title: "게시글",
      description: "Coworkers 자유게시판",
    };
  }

  return {
    title: article.title,
    description: article.content.slice(0, 160),
    openGraph: {
      title: `${article.title} | Coworkers`,
      description: article.content.slice(0, 160),
      type: "article",
      url: `https://coworkes.com/boards/${articleId}`,
      locale: "ko_KR",
      siteName: "Coworkers",
      images: article.image
        ? [
            {
              url: article.image,
              width: 1200,
              height: 630,
              alt: article.title,
            },
          ]
        : [
            {
              url: "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Coworkers/user/2449/open_graph.jpg",
              width: 1200,
              height: 630,
              alt: "Coworkers 자유게시판",
            },
          ],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { articleId } = await params;

  return <ArticleDetailClient articleId={Number(articleId)} />;
}
