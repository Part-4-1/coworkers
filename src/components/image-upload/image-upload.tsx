"use client";

import { useState } from "react";
import { useImageUpload } from "@/hooks/image-upload/use-image-upload";
import { Icon, Button } from "../index";
import cn from "@/utils/clsx";

interface ImageUploadProps {
  maxCount?: number;
}

const ImageUpload = ({ maxCount = 5 }: ImageUploadProps) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const { previews, error, isLoading, handleFile, removeImage } =
    useImageUpload({
      maxCount,
    });

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(e.type === "dragenter" || e.type === "dragover");
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);

    const files = Array.from(e.dataTransfer.files);
    files.forEach(handleFile);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.currentTarget.files || []);
    files.forEach(handleFile);
  };

  const isFull = previews.length >= maxCount;

  return (
    <div className="w-full">
      <div className="flex gap-4">
        {!isFull && (
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={cn(
              "h-[120px] w-[120px] flex-shrink-0 cursor-pointer rounded-lg border-2 border-dashed p-[10px] transition-colors flex-center",
              isDragActive
                ? "border-blue-400 bg-blue-50"
                : "border-gray-300 hover:border-gray-400 hover:bg-gray-50"
            )}
          >
            <label className="flex h-full w-full cursor-pointer flex-col items-center gap-4 flex-center">
              <input
                type="file"
                accept="image/*"
                onChange={handleInputChange}
                disabled={isLoading}
                className="hidden"
                multiple
              />
              <Icon icon="imgUpload" className="h-6 w-6" />
              <p className="text-lg text-gray-800">
                {previews.length}/{maxCount}
              </p>
            </label>
          </div>
        )}

        {previews.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {previews.map((preview) => (
              <div key={preview.id} className="group relative flex-shrink-0">
                <img
                  src={preview.url}
                  alt={`preview-${preview.id}`}
                  className="h-[120px] w-[120px] rounded-lg object-cover"
                />
                <Button
                  variant="none"
                  onClick={() => removeImage(preview.id)}
                  className="absolute -right-2 -top-2 rounded-full border border-gray-400 bg-white p-1 opacity-0 transition-opacity hover:bg-gray-300 group-hover:opacity-100"
                >
                  <Icon icon="x" className="h-4 w-4 text-gray-600" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>

      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default ImageUpload;
