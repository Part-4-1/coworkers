import cn from "@/utils/clsx";
import Image from "next/image";
import { Icon } from "../index";
import { toDotDateString } from "@/utils/date-util";

interface PostCardProps {
  imgUrl?: string;
  title: string;
  content: string;
  writer: string;
  createdAt: string;
  likes: number;
  isLiked: boolean;
  isBest?: boolean;
  className?: string;
}

const PostCard = ({
  imgUrl,
  title,
  content,
  writer,
  createdAt,
  likes,
  isLiked,
  isBest = false,
  className,
}: PostCardProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-col gap-3 rounded-[20px] border border-gray-300 px-4 py-4",
        className
      )}
    >
      {isBest && (
        <div className="w-[72px] rounded-full bg-gray-50 px-1 py-[6px] flex-center">
          <Icon icon="best" className="h-[18px] w-[18px] text-blue-200" />
          <span className="text-md font-bold text-blue-200">인기</span>
        </div>
      )}
      <div className="flex items-center justify-between">
        <div className="flex min-w-0 flex-col gap-2">
          <p className="truncate text-lg font-bold">{title}</p>
          <p className="line-clamp-2 resize-none whitespace-pre text-sm leading-[18px] text-gray-800">
            {content}
          </p>
        </div>
        {imgUrl && (
          <Image
            src={imgUrl}
            width={80}
            height={80}
            alt="thumbnail"
            className="shrink-0 rounded-lg"
          />
        )}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">{writer}</span>
          <span className="text-sm">|</span>
          <time
            dateTime={createdAt}
            className="text-sm font-medium text-gray-700"
          >
            {toDotDateString(createdAt)}
          </time>
        </div>
        <div className="gap-1 flex-center">
          <Icon
            icon={isLiked ? "heartActive" : "heartDefault"}
            className="h-4 w-4 text-gray-700"
          />
          <span className="text-sm font-medium text-gray-700">
            {likes > 1000 ? "999+" : likes}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
