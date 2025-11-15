import Image from "next/image";
import { Button, Icon } from "@/components/index";
import { Article } from "@/types/article";

interface ArticleContentsProps {
  article: Article;
}

const ArticleContents = ({ article }: ArticleContentsProps) => {
  return (
    <div className="mb-4 flex w-full flex-col gap-5 tablet:mb-[28px] tablet:gap-6 pc:mb-[40px]">
      <Image
        src={article.image || ""}
        alt={`${article.image} 게시글 이미지`}
        width={140}
        height={140}
        className="tablet:h-[200px] tablet:w-[200px]"
      />
      <p className="whitespace-pre-wrap">{article.content}</p>
      <div className="mx-auto w-full max-w-[180px] gap-6 flex-center">
        <Button variant="none">
          <Icon icon="heartDefault" className="h-7 w-7" />
          <p className="text-md">{article.likeCount}</p>
        </Button>
        <Button variant="outlined">목록 가기</Button>
      </div>
    </div>
  );
};

export default ArticleContents;
