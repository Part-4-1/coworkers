"use client";

import { useState } from "react";
import { Comment } from "@/types/index";
import useDeleteArticleComment from "@/hooks/api/articles/use-delete-article-comment";
import usePatchArticleComment from "@/hooks/api/articles/use-patch-article-comment";

export const useCommentHandlers = (comment: Comment, articleId?: number) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(comment.content);

  const { mutate: deleteComment } = useDeleteArticleComment();
  const { mutate: patchComment } = usePatchArticleComment();

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    patchComment({ commentId: comment.id, content: editedContent });
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (!articleId) return;
    deleteComment({ commentId: comment.id, articleId });
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
