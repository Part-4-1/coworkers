"use client";

import { useState } from "react";
import cn from "@/utils/clsx";
import Button from "../button/button";
import Icon from "../icon/Icon";
import Dropdown from "../dropdown-components/dropdown";
import { Comment } from "@/types/index";
import TextareaAutosize from "react-textarea-autosize";
import DefaultProfile from "@/assets/icons/ic-user.svg";
import { toDotDateString } from "@/utils/date-util";
import { useGetUserInfoQuery } from "@/hooks/api/user/use-get-user-info-query";

interface CommentProps {
  comment: Comment;
  onEdit: (commentId: number, content: string) => void;
  onDelete: (commentId: number) => void;
}

const Reply = ({ comment, onEdit, onDelete }: CommentProps) => {
  const { data: userInfo } = useGetUserInfoQuery();
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(comment.content);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(comment.id, editedContent);
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(comment.id);
  };

  const handleCancel = () => {
    setEditedContent(comment.content);
    setIsEditing(false);
  };

  const isWriter = userInfo?.id === comment.writer.id;

  const hasImage = comment.writer.image?.trim();
  const isSaveDisabled = !editedContent.trim();

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
          src={comment.writer.image ?? ""}
          alt={`${comment.writer.nickname}의 프로필`}
          className={cn(profileStyle, "object-cover")}
        />
      ) : (
        <DefaultProfile className={cn(profileStyle, "object-cover")} />
      )}

      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <div className="flex min-w-0 items-center">
          <strong className="flex-1 truncate text-md font-semibold text-blue-700">
            {comment.writer.nickname}
          </strong>

          <div className="relative ml-auto h-6 w-6 flex-shrink-0">
            {!isEditing && isWriter && (
              <Dropdown
                trigger={
                  <Button variant="none" className="p-0" aria-label="메뉴">
                    <Icon icon="kebab" className="h-4 w-4" />
                  </Button>
                }
                items={[
                  { label: "수정하기", onClick: handleEditClick },
                  { label: "삭제하기", onClick: handleDelete },
                ]}
                isWidthFull={false}
              />
            )}
          </div>
        </div>

        {isEditing ? (
          <div className="flex flex-col gap-2">
            <TextareaAutosize
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
              className="w-full resize-none rounded-lg border border-blue-400 px-2 py-2 text-md leading-relaxed focus:outline-none"
              minRows={3}
            />
            <div className="flex gap-2">
              <Button
                onClick={handleSave}
                className="text-md"
                disabled={isSaveDisabled}
              >
                저장
              </Button>
              <Button
                variant="outlined"
                onClick={handleCancel}
                className="text-md"
              >
                취소
              </Button>
            </div>
          </div>
        ) : (
          <p className="w-full text-md leading-relaxed text-gray-800 tablet:max-w-[464px] pc:max-w-[704px]">
            {editedContent}
          </p>
        )}

        {!isEditing && (
          <time dateTime={comment.createdAt} className="text-md text-gray-700">
            {toDotDateString(comment.createdAt)}
          </time>
        )}
      </div>
    </article>
  );
};

export default Reply;
