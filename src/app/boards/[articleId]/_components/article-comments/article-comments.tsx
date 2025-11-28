"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Article } from "@/types/article";
import { InputReply, Reply, Button, Icon } from "@/components/index";
import { usePostArticleComment } from "@/hooks/api/articles/use-post-article-comment";
import { useGetUserInfoQuery } from "@/hooks/api/user/use-get-user-info-query";
import useGetArticleComments from "@/hooks/api/articles/use-get-article-comments";
import useToggleArticleLike from "@/hooks/api/articles/use-toggle-article-like";
import usePatchArticleComment from "@/hooks/api/articles/use-patch-article-comment";
import useDeleteArticleComment from "@/hooks/api/articles/use-delete-article-comment";
import LikeButton from "@/components/lottie/LikeButton";
import DefaultProfile from "@/assets/icons/ic-user.svg";
import { filterProfanity } from "@/utils/profanityFilter";

interface ArticleCommentsProps {
  article: Article;
}

const ArticleComments = ({ article }: ArticleCommentsProps) => {
  const { mutate, isPending } = usePostArticleComment();
  const { mutate: patchComment } = usePatchArticleComment();
  const { mutate: deleteComment } = useDeleteArticleComment();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetArticleComments({ articleId: article.id });

  const { data: userInfo } = useGetUserInfoQuery();

  const { mutate: toggleLike, isPending: isLikePending } = useToggleArticleLike(
    article.id
  );

  const handleLikeClick = () => {
    toggleLike(article.isLiked);
  };

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
    const filteredContent = filterProfanity(content);

    mutate({
      articleId: article.id,
      data: {
        content: filteredContent,
      },
    });
  };

  const allComments = data?.pages.flatMap((page) => page.list) ?? [];

  return (
    <>
      <div className="mb-3 mt-8 flex items-center justify-between tablet:mb-4 tablet:mt-[61px]">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 font-bold">
            <Icon
              icon="comment"
              className="h-[18px] w-[18px] text-blue-100 tablet:h-5 tablet:w-5"
            />
            <span className="text-md tablet:text-lg">
              {article.commentCount}
            </span>
          </div>
          <Button
            variant="none"
            onClick={handleLikeClick}
            disabled={isLikePending}
            className="relative flex items-center gap-1"
          >
            <LikeButton isLiked={article.isLiked} />
            <Icon
              icon={article.isLiked ? "heartActive" : "heartDefault"}
              className="h-[18px] w-[18px] tablet:h-5 tablet:w-5"
            />
            <span className="text-md tablet:text-lg">{article.likeCount}</span>
          </Button>
        </div>
        <Link href="/boards">
          <Button variant="none" className="pr-2">
            <Icon
              icon="articleList"
              className="h-[18px] w-[18px] text-blue-100 pc:h-5 pc:w-5"
            />
          </Button>
        </Link>
      </div>
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

      {allComments.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20">
          <p className="text-lg text-gray-400">아직 작성된 댓글이 없습니다</p>
        </div>
      )}

      {allComments.length > 0 && (
        <div className="flex flex-col gap-4">
          {allComments.map((comment) => (
            <div key={comment.id}>
              <hr className="border-gray-300 pb-5" />
              <Reply
                comment={comment}
                onEdit={(commentId, content) => {
                  const filteredContent = filterProfanity(content);
                  patchComment({ commentId, content: filteredContent });
                }}
                onDelete={(commentId) =>
                  deleteComment({ commentId, articleId: article.id })
                }
              />
            </div>
          ))}
          <div ref={observerTarget} className="h-4" />
        </div>
      )}
    </>
  );
};

export default ArticleComments;
