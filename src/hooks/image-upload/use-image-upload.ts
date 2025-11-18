"use client";

import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import postImage from "../../api/image/post-image";

interface ImagePreview {
  id: string;
  url: string;
}

interface UseImageUploadOptions {
  onError?: (error: string) => void;
  maxCount?: number;
  onImagesChange?: (images: string[]) => void;
  initialImages?: string[];
}

export const useImageUpload = ({
  onError,
  maxCount = 5,
  onImagesChange,
  initialImages = [],
}: UseImageUploadOptions = {}) => {
  const [previews, setPreviews] = useState<ImagePreview[]>(
    initialImages.map((url) => ({ id: crypto.randomUUID(), url }))
  );
  const [error, setError] = useState<string | null>(null);

  const MAX_SIZE = 10 * 1024 * 1024;

  useEffect(() => {
    onImagesChange?.(previews.map((p) => p.url));
  }, [previews, onImagesChange]);

  const validateFile = (file: File): boolean => {
    if (previews.length >= maxCount) {
      const message = `최대 ${maxCount}개까지만 업로드 가능합니다.`;
      setError(message);
      onError?.(message);
      return false;
    }

    if (!file.type.startsWith("image/")) {
      const message = "이미지 파일만 업로드 가능합니다.";
      setError(message);
      onError?.(message);
      return false;
    }

    if (file.size > MAX_SIZE) {
      const message = "파일 크기는 10MB 이하여야 합니다.";
      setError(message);
      onError?.(message);
      return false;
    }

    return true;
  };

  const uploadMutation = useMutation({
    mutationFn: (file: File) => postImage({ url: file }),
    onSuccess: (data) => {
      setPreviews((prev) => [
        ...prev,
        { id: crypto.randomUUID(), url: data.url },
      ]);
    },
    onError: () => {
      const errorMessage = "업로드 중 오류가 발생했습니다.";
      setError(errorMessage);
      onError?.(errorMessage);
    },
  });

  const handleFile = (file: File) => {
    if (!validateFile(file)) return;
    setError(null);
    uploadMutation.mutate(file);
  };

  const removeImage = (id: string) => {
    setPreviews((prev) => prev.filter((preview) => preview.id !== id));
  };

  return {
    previews,
    error,
    isLoading: uploadMutation.isPending,
    handleFile,
    removeImage,
  };
};
