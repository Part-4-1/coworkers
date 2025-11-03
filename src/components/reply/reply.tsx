"use client";

import cn from "@/utils/clsx";
import { Icon } from "@/components/index";
import { Comment } from "@/types/index";

interface CommentProps {
  comment: Comment;
}

const DEFAULT_PROFILE = "/ic-user.svg";

const Reply = ({ comment }: CommentProps) => {
  return (
    <article
      className={cn(
        "flex w-full max-w-[300px] gap-4",
        "tablet:max-w-[540px]",
        "pc:max-w-[780px]"
      )}
    >
      <img
        src={comment.writer.image || DEFAULT_PROFILE}
        alt={`${comment.writer.nickname}의 프로필`}
        onError={(e) => {
          e.currentTarget.src = DEFAULT_PROFILE;
        }}
        className={cn(
          "h-[24px] w-[24px] rounded-lg bg-gray-300 object-cover",
          "tablet:h-[32px] tablet:w-[32px]",
          "pc:h-[32px] pc:w-[32px]"
        )}
      />

      <div className="flex flex-1 flex-col gap-[6px]">
        <header className="flex items-center">
          <strong className="text-md font-semibold text-blue-700">
            {comment.writer.nickname}
          </strong>

          <button
            className="ml-auto rounded-full transition-colors hover:bg-gray-100"
            aria-label="메뉴"
          >
            <Icon icon="kebab" width={16} height={16} />
          </button>
        </header>

        <p className="text-md text-gray-800">{comment.content}</p>

        <time dateTime={comment.createdAt} className="text-md text-gray-700">
          {new Date(comment.createdAt)
            .toLocaleDateString("ko-KR")
            .replace(/\.$/, "")}
        </time>
      </div>
    </article>
  );
};

export default Reply;
