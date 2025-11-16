"use client";

import Image from "next/image";
import { Article } from "@/types/article";
import { Comment } from "@/types/comment";
import { InputReply, Reply } from "@/components/index";

interface ArticleCommentsProps {
  article: Article;
  comments: Comment[];
}

const ArticleComments = ({ article, comments }: ArticleCommentsProps) => {
  return (
    <div>
      <h3 className="mb-3 mt-4 flex gap-1 text-2lg font-bold tablet:mb-4 tablet:mt-[28px] pc:mt-[40px]">
        <span className="text-blue-700">댓글</span>
        <span className="text-blue-200">{article.commentCount}</span>
      </h3>
      <div className="mb-[28px] flex items-center gap-4 tablet:mb-[36px]">
        {article.writer.image && (
          <Image
            src={article.writer.image}
            alt="프로필"
            width={24}
            height={24}
            className="rounded-md tablet:h-[32px] tablet:w-[32px]"
          />
        )}
        <InputReply onSubmit={() => {}} />
      </div>
      <div className="flex flex-col gap-4">
        {comments.map((comment) => (
          <div key={comment.id}>
            <hr className="border-gray-300 pb-5" />
            <Reply comment={comment} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleComments;
