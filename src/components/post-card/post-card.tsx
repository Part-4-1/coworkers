import cn from "@/utils/clsx";
import Image from "next/image";
import { Icon } from "../index";

interface PostCardProps {
  imgUrl?: string;
  title: string;
  content: string;
  writer: string;
  createdAt: string;
  likes: number;
  isLiked: boolean;
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
  className,
}: PostCardProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-col gap-3 rounded-[20px] border border-gray-300 px-4 py-4",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2 truncate">
          <p className="truncate text-lg font-bold">{title}</p>
          <p className="h-[38px] resize-none truncate whitespace-pre text-sm leading-[18px] text-gray-800">
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
        <div>
          <span className="text-sm font-medium">{writer}</span> |{" "}
          <span className="text-sm font-medium text-gray-700">{createdAt}</span>
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
