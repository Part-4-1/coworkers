import Image from "next/image";
import { Article } from "@/types/article";

interface ArticleContentsProps {
  article: Article;
}

const ArticleContents = ({ article }: ArticleContentsProps) => {
  return (
    <div className="flex w-full flex-col gap-5 tablet:gap-6">
      <p className="whitespace-pre-wrap">{article.content}</p>
      <Image
        src={article.image || ""}
        alt={`${article.image} 게시글 이미지`}
        width={140}
        height={140}
        className="tablet:h-[200px] tablet:w-[200px]"
      />
    </div>
  );
};

export default ArticleContents;
