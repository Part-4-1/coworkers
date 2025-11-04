"use client";

import cn from "@/utils/clsx";
import { useState } from "react";
import { Button, Icon } from "@/components/index";
import { Comment } from "@/types/index";
import DefaultProfile from "@/assets/icons/ic-user.svg";

interface CommentProps {
  comment: Comment;
}

const Reply = ({ comment }: CommentProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const hasImage = comment.writer.image?.trim();

  const profileStyle = cn(
    "bg-gray-300 rounded-lg h-[24px] w-[24px]",
    "tablet:h-[32px] tablet:w-[32px]",
    "pc:h-[32px] pc:w-[32px]"
  );

  return (
    <article
      className={cn(
        "flex min-h-[250px] w-full max-w-[300px] flex-col gap-4",
        "tablet:max-w-[540px]",
        "pc:max-w-[780px]"
      )}
    >
      {hasImage ? (
        <img
          src={comment.writer.image}
          alt={`${comment.writer.nickname}의 프로필`}
          className={cn(profileStyle, "object-cover")}
        />
      ) : (
        <DefaultProfile className={cn(profileStyle, "object-cover")} />
      )}

      <div className="flex flex-1 flex-col gap-[6px]">
        <header className="flex items-center">
          <strong className="text-md font-semibold text-blue-700">
            {comment.writer.nickname}
          </strong>

          <div className="relative ml-auto">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-full"
              aria-label="메뉴"
            >
              <Icon icon="kebab" width={16} height={16} />
            </button>
          </div>
        </header>

        <p className="text-md text-gray-800">{comment.content}</p>

        <time dateTime={comment.createdAt} className="text-md text-gray-700">
          {new Date(comment.createdAt)
            .toLocaleDateString("ko-KR")
            .replace(/\.$/, "")}
        </time>

        {isMenuOpen && (
          <div className="flex gap-2 self-end">
            <Button
              variant="none"
              className="w-fit rounded-lg px-3 py-2 text-md text-gray-700 hover:text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              취소
            </Button>
            <Button
              variant="outlined"
              className="w-fit rounded-lg px-3 py-2 text-md"
            >
              수정하기
            </Button>
          </div>
        )}
      </div>
    </article>
  );
};

export default Reply;
