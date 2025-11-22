"use client";

import { useState, useEffect, useRef } from "react";
import { useImageUpload } from "./image-upload/use-image-upload";

interface UseProfileImageManagerOptions {
  initialImage?: string;
  onImageChange?: (image: string) => void;
}

export const useProfileImageManager = ({
  initialImage = "",
  onImageChange,
}: UseProfileImageManagerOptions = {}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [profileImage, setProfileImage] = useState(initialImage);
  const [pendingFile, setPendingFile] = useState<File | null>(null);

  const { handleFile, removeImage, previews, isLoading } = useImageUpload({
    maxCount: 1,
    onImagesChange: (images) => {
      if (images[0]) {
        setProfileImage(images[0]);
        onImageChange?.(images[0]);
      }
    },
  });

  useEffect(() => {
    if (initialImage) {
      setProfileImage(initialImage);
    }
  }, [initialImage]);

  useEffect(() => {
    if (pendingFile && previews.length === 0) {
      handleFile(pendingFile);
      setPendingFile(null);
    }
  }, [previews, pendingFile, handleFile]);

  const handleImageClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (previews[0]) {
        setPendingFile(file);
        removeImage(previews[0].id);
      } else {
        handleFile(file);
      }
    }
  };

  const handleRemoveImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setProfileImage("");
    setPendingFile(null);
    onImageChange?.("");
    if (previews[0]) {
      removeImage(previews[0].id);
    }
  };

  return {
    profileImage,
    setProfileImage,
    fileInputRef,
    handleImageClick,
    handleFileChange,
    handleRemoveImage,
    isUploading: isLoading,
  };
};
