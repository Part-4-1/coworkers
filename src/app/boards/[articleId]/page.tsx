import ArticleDetailClient from "./_components/article-detail-client";

interface PageProps {
  params: Promise<{ articleId: string }>;
}

export default async function Page({ params }: PageProps) {
  const { articleId } = await params;

  return <ArticleDetailClient articleId={Number(articleId)} />;
}
