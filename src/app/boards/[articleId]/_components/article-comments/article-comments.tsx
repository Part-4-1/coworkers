"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Article } from "@/types/article";
import { InputReply, Reply } from "@/components/index";
import { usePostArticleComment } from "@/hooks/api/articles/use-post-article-comment";
import { useGetUserInfoQuery } from "@/hooks/api/user/use-get-user-info-query";
import useGetArticleComments from "@/hooks/api/articles/use-get-article-comments";
import DefaultProfile from "@/assets/icons/ic-user.svg";

interface ArticleCommentsProps {
  article: Article;
}

const ArticleComments = ({ article }: ArticleCommentsProps) => {
  const { mutate, isPending } = usePostArticleComment();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetArticleComments({ articleId: article.id });

  const { data: userInfo } = useGetUserInfoQuery();

  const observerTarget = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 }
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  const handleCommentSubmit = (content: string) => {
    mutate({
      articleId: article.id,
      data: {
        content,
      },
    });
  };

  const allComments = data?.pages.flatMap((page) => page.list) ?? [];

  return (
    <div>
      <h3 className="mb-3 mt-4 flex gap-1 text-2lg font-bold tablet:mb-4 tablet:mt-[28px] pc:mt-[40px]">
        <span className="text-blue-700">댓글</span>
        <span className="text-blue-200">{article.commentCount}</span>
      </h3>
      <div className="mb-[28px] flex items-center gap-4 tablet:mb-[36px]">
        {userInfo?.image ? (
          <Image
            src={userInfo.image}
            alt="프로필"
            width={24}
            height={24}
            className="rounded-md tablet:h-[32px] tablet:w-[32px]"
          />
        ) : (
          <DefaultProfile className="h-[24px] w-[24px] rounded-md bg-gray-300 tablet:h-[32px] tablet:w-[32px]" />
        )}
        <InputReply onSubmit={handleCommentSubmit} disabled={isPending} />
      </div>
      <div className="flex flex-col gap-4">
        {allComments.map((comment) => (
          <div key={comment.id}>
            <hr className="border-gray-300 pb-5" />
            <Reply comment={comment} articleId={article.id} />
          </div>
        ))}
        <div ref={observerTarget} className="h-4" />
      </div>
    </div>
  );
};

export default ArticleComments;
