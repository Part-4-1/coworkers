import Image from "next/image";
import { Button, Icon } from "@/components/index";
import { Article } from "@/types/article";

interface ArticleHeaderProps {
  article: Article;
}

const ArticleHeader = ({ article }: ArticleHeaderProps) => {
  return (
    <div>
      <div className="flex flex-1">
        <h2>{article.title}</h2>
        <Button variant="none" className="h-6 w-6">
          <Icon icon="kebab" className="h-3 w-[3px] px-[10.5px] py-[6px]" />
        </Button>
      </div>
      <div>
        <Image
          src={article.writer.image || ""}
          alt={article.writer.nickname}
          width={24}
          height={24}
          className="rounded-md"
        />
        <div>
          <span>{article.writer.nickname}</span>
          <span>{article.createdAt}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleHeader;
