"use client";

import Image from "next/image";
import { Article } from "@/types/article";

interface ArticleContentsProps {
  article: Article;
}

const ArticleContents = ({ article }: ArticleContentsProps) => {
  return (
    <div className="mb-4 flex w-full flex-col gap-5 tablet:mb-[28px] tablet:gap-6 pc:mb-[40px]">
      {article.image && (
        <Image
          src={article.image}
          alt={`${article.title} 게시글 이미지`}
          width={140}
          height={140}
          className="rounded-lg tablet:h-[200px] tablet:w-[200px]"
        />
      )}
      <p className="whitespace-pre-wrap break-words">{article.content}</p>
    </div>
  );
};

export default ArticleContents;
