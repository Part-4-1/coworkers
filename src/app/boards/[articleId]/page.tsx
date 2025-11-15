import ArticleHeader from "./_components/article-header/article-header";
import ArticleContents from "./_components/article-contents/article-contents";
import ArticleComments from "./_components/article-comments/article-comments";
import { mockArticleData } from "@/mocks/article-data";
import { mockComments } from "@/mocks/comment-data";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  const article = mockArticleData;
  const comments = mockComments;

  return (
    <main className="mx-auto my-[68px] w-full max-w-[343px] rounded-[20px] bg-white tablet:max-w-[620px] pc:max-w-[900px]">
      <article className="px-[20px] py-[40px] tablet:px-[40px] tablet:py-[60px] pc:px-[60px] pc:py-[88px]">
        <ArticleHeader article={article} />
        <ArticleContents article={article} />
        <ArticleComments article={article} comments={comments} />
      </article>
    </main>
  );
};

export default Page;
