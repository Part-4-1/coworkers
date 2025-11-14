import cn from "@/utils/clsx";
import Image from "next/image";
import Icon from "../icon/Icon";
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
        "flex w-full flex-col gap-3 rounded-[20px] border border-gray-300 bg-white px-4 py-4",
        "tablet:px-6 tablet:py-5",
        className
      )}
    >
      <div className={cn("flex flex-col gap-3")}>
        {isBest && (
          <div className="w-[72px] rounded-full bg-gray-50 px-1 py-[6px] flex-center">
            <Icon icon="best" className="h-[18px] w-[18px] text-blue-200" />
            <span className="text-md font-bold text-blue-200">인기</span>
          </div>
        )}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div
              className={cn(
                "flex h-[80px] min-w-0 flex-col justify-center gap-2 tablet:h-[88px]",
                isBest && "mobile:h-[67px] tablet:h-[67px] pc:h-[71px]"
              )}
            >
              <p
                className={cn(
                  "truncate text-lg font-bold tablet:text-2lg",
                  isBest && "tablet:text-lg pc:text-2lg"
                )}
              >
                {title}
              </p>
              <p
                className={cn(
                  "line-clamp-2 h-[42px] resize-none truncate whitespace-pre text-sm leading-[18px] text-gray-800 tablet:text-md",
                  isBest && "tablet:text-sm pc:text-md"
                )}
              >
                {content}
              </p>
            </div>
            {imgUrl && (
              <Image
                src={imgUrl}
                width={isBest ? 48 : 88}
                height={isBest ? 48 : 88}
                alt="thumbnail"
                className={cn(
                  "shrink-0 rounded-lg",
                  isBest && "pc:h-[66px] pc:w-[66px]"
                )}
                draggable={false}
              />
            )}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={cn("text-sm font-medium", isBest && "pc:text-md")}>
              {writer}
            </span>
            <span className="text-sm">|</span>
            <time
              dateTime={createdAt}
              className={cn(
                "text-sm font-medium text-gray-700",
                isBest && "pc:text-md"
              )}
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
    </div>
  );
};

export default PostCard;
