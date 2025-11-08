import cn from "@/utils/clsx";
import { Button, Icon, Dropdown } from "@/components/index";
import { Comment } from "@/types/index";
import DefaultProfile from "@/assets/icons/ic-user.svg";
import { toDotDateString } from "@/utils/date-util";

interface CommentProps {
  comment: Comment;
}

const Reply = ({ comment }: CommentProps) => {
  const hasImage = comment.writer.image?.trim();

  const profileStyle = cn(
    "bg-gray-300 rounded-lg h-[24px] w-[24px]",
    "tablet:h-[32px] tablet:w-[32px]",
    "pc:h-[32px] pc:w-[32px]"
  );

  return (
    <article
      className={cn(
        "flex w-full max-w-[300px] gap-4",
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
        <div className="flex items-center">
          <strong className="text-md font-semibold text-blue-700">
            {comment.writer.nickname}
          </strong>

          <div className="relative ml-auto">
            <Dropdown
              trigger={
                <Button variant="none" className="p-0" aria-label="메뉴">
                  <Icon icon="kebab" className="h-4 w-4" />
                </Button>
              }
              items={[{ label: "수정하기" }, { label: "삭제하기" }]}
              isWidthFull={false}
            />
          </div>
        </div>

        <p className="w-full text-md text-gray-800 tablet:max-w-[464px] pc:max-w-[704px]">
          {comment.content}
        </p>

        <time dateTime={comment.createdAt} className="text-md text-gray-700">
          {toDotDateString(comment.createdAt)}
        </time>
      </div>
    </article>
  );
};

export default Reply;
