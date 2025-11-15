import Image from "next/image";
import { Button, Icon } from "@/components/index";
import { Article } from "@/types/article";
import { toKoreanDateString } from "@/utils/date-util";

interface ArticleHeaderProps {
  article: Article;
}

const ArticleHeader = ({ article }: ArticleHeaderProps) => {
  const createdAt = toKoreanDateString(article.createdAt);

  return (
    <div className="flex w-full flex-col gap-4 pb-[16px] tablet:pb-[28px]">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-blue-700">{article.title}</h2>
        <Button variant="none">
          <Icon icon="kebab" className="h-6 w-6" />
        </Button>
      </div>
      <div className="flex items-center gap-2 border-b pb-3">
        <Image
          src={article.writer.image || ""}
          alt={article.writer.nickname}
          width={24}
          height={24}
          className="rounded-md"
        />
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-blue-700 tablet:text-md">
            {article.writer.nickname}
          </span>
          <div className="h-3 w-[1px] bg-blue-600"></div>
          <span className="text-xs font-medium text-gray-700 tablet:text-md">
            {createdAt}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleHeader;
