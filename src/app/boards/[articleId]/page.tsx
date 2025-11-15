import ArticleHeader from "./_components/article-header/article-header";
import ArticleContents from "./_components/article-contents/article-contents";
import ArticleComments from "./_components/article-comments/article-comments";
import { mockArticleData } from "@/mocks/article-data";
import { mockComments } from "@/mocks/comment-data";

interface PageProps {
  params: {
    id: string;
  };
}

const Page = ({ params }: PageProps) => {
  const article = mockArticleData;
  const comments = mockComments;

  return (
    <main className="mx-auto w-full max-w-[343px] rounded-[20px] bg-white tablet:max-w-[620px] pc:max-w-[900px]">
      <ArticleHeader article={article} />
      <ArticleContents />
      <ArticleComments />
    </main>
  );
};

export default Page;
