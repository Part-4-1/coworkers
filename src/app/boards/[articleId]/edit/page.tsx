import type { Metadata } from "next";
import ArticleEditClient from "./_components/article-edit-client";
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
      title: "게시글 수정",
      description: "Coworkers 자유게시판 게시글 수정",
    };
  }

  return {
    title: `${article.title} 수정`,
    description: "Coworkers 자유게시판 게시글 수정",
    openGraph: {
      title: `${article.title} 수정 | Coworkers`,
      description: "Coworkers 자유게시판 게시글 수정",
      type: "website",
      url: `https://coworkes.com/boards/${articleId}/edit`,
      locale: "ko_KR",
      siteName: "Coworkers",
      images: [
        {
          url: "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Coworkers/user/2449/open_graph.jpg",
          width: 1200,
          height: 630,
          alt: "Coworkers 게시글 수정",
        },
      ],
    },
  };
}

export default async function EditPage({ params }: PageProps) {
  const { articleId } = await params;
  const article = await getArticleDetail(Number(articleId));

  return (
    <ArticleEditClient articleId={Number(articleId)} initialData={article} />
  );
}
