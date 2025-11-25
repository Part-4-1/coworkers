"use client";

import Link from "next/link";
import Image from "next/image";
import { Button, Icon } from "@/components/index";
import { Article } from "@/types/article";
import useToggleArticleLike from "@/hooks/api/articles/use-toggle-article-like";
import LikeButton from "@/components/lottie/LikeButton";

interface ArticleContentsProps {
  article: Article;
}

const ArticleContents = ({ article }: ArticleContentsProps) => {
  const { mutate: toggleLike, isPending } = useToggleArticleLike(article.id);

  const handleLikeClick = () => {
    toggleLike(article.isLiked);
  };

  return (
    <div className="mb-4 flex w-full flex-col gap-5 tablet:mb-[28px] tablet:gap-6 pc:mb-[40px]">
      {article.image && (
        <Image
          src={article.image}
          alt={`${article.title} 게시글 이미지`}
          width={140}
          height={140}
          className="rounded-lg tablet:h-[200px] tablet:w-[200px]"
          onError={() => console.log("이미지 로드 실패:", article.image)}
        />
      )}
      <p className="whitespace-pre-wrap break-words">{article.content}</p>
      <div className="mx-auto w-full max-w-[180px] gap-6 flex-center">
        <Button
          variant="none"
          onClick={handleLikeClick}
          disabled={isPending}
          className="relative min-w-[60px]"
        >
          <LikeButton isLiked={article.isLiked} />
          <Icon
            icon={article.isLiked ? "heartActive" : "heartDefault"}
            className="h-7 w-7"
          />
          <p className="text-md">{article.likeCount}</p>
        </Button>
        <Link href="/boards" className="flex-1">
          <Button variant="outlined" className="w-full">
            목록 가기
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ArticleContents;
