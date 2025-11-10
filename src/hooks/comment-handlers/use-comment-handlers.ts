"use client";

import { useState } from "react";
import { Comment } from "@/types/index";

export const useCommentHandlers = (comment: Comment) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(comment.content);

  {
    /* TODO(준열) : 향후, api 호출, api 훅 작성하여 연결 예정*/
  }
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    console.log("저장될 내용:", editedContent);
    setIsEditing(false);
  };

  const handleDelete = () => {
    console.log("삭제될 댓글 ID:", comment.id);
  };

  const handleCancel = () => {
    setEditedContent(comment.content);
    setIsEditing(false);
  };

  return {
    isEditing,
    editedContent,
    setEditedContent,
    handleEdit,
    handleSave,
    handleDelete,
    handleCancel,
  };
};
