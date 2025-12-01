"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import cn from "@/utils/clsx";
import {
  InputBox,
  ImageUpload,
  Button,
  LoadingSpinner,
} from "@/components/index";
import { usePostArticle } from "@/hooks/api/articles/use-post-article";
import { filterProfanity } from "@/utils/profanityFilter";
import { MAX_ARTICLE_TITLE_LENGTH } from "@/app/boards/_constants/article";

interface WriteFormData {
  title: string;
  content: string;
}

const ArticleWriteContents = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<WriteFormData>();
  const { mutate, isPending } = usePostArticle();
  const [images, setImages] = useState<string[]>([]);
  const titleValue = watch("title") || "";

  const handleImagesChange = useCallback((images: string[]) => {
    setImages(images);
  }, []);

  const onSubmit = (data: WriteFormData) => {
    const filteredTitle = filterProfanity(data.title);
    const filteredContent = filterProfanity(data.content);

    mutate(
      {
        title: filteredTitle,
        content: filteredContent,
        image: images[0] || undefined,
      },
      {
        onSuccess: () => {
          router.push("/boards");
        },
      }
    );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        "flex w-full flex-col px-[22px] py-[45px]",
        "tablet:px-[40px] tablet:py-[73px]",
        "pc:px-[70px]"
      )}
    >
      <h2 className="pb-[32px] text-xl font-bold text-blue-700">게시글 쓰기</h2>

      <div className="flex w-full flex-col items-start gap-2 pb-[24px] tablet:gap-3 tablet:pb-[32px]">
        <div className="flex gap-[6px]">
          <span className="text-lg font-bold text-blue-700">제목</span>
          <span className="text-red-200">*</span>
        </div>
        <div className="relative flex w-full items-center">
          <InputBox
            placeholder="제목을 입력해주세요."
            {...register("title", { required: "제목은 필수입니다" })}
            maxLength={MAX_ARTICLE_TITLE_LENGTH}
          />
        </div>
        {titleValue.length > 0 && (
          <div className="w-full text-right">
            <span
              className={cn(
                "text-xs",
                titleValue.length === MAX_ARTICLE_TITLE_LENGTH
                  ? "text-red-500"
                  : "text-gray-500"
              )}
            >
              {titleValue.length}/{MAX_ARTICLE_TITLE_LENGTH}
            </span>
          </div>
        )}
        {errors.title && (
          <span className="text-sm text-red-500">{errors.title.message}</span>
        )}
      </div>

      <div className="flex flex-col items-start gap-2 pb-[24px] tablet:gap-3 tablet:pb-[32px]">
        <div className="flex gap-[6px]">
          <span className="text-lg font-bold text-blue-700">내용</span>
          <span className="text-red-200">*</span>
        </div>
        <InputBox
          placeholder="내용을 입력하세요."
          height="h-[200px] tablet:h-[240px]"
          {...register("content", { required: "내용은 필수입니다" })}
        />
        {errors.content && (
          <span className="text-sm text-red-500">{errors.content.message}</span>
        )}
      </div>

      <div className="flex flex-col items-start gap-2 pb-[48px] tablet:gap-3 tablet:pb-[57px]">
        <span className="text-lg font-bold text-blue-700">이미지</span>
        <ImageUpload maxCount={1} onImagesChange={handleImagesChange} />
      </div>

      <Button
        variant="solid"
        type="submit"
        disabled={isPending}
        className={isPending ? "cursor-not-allowed opacity-50" : ""}
      >
        {isPending ? <LoadingSpinner /> : "등록하기"}
      </Button>
    </form>
  );
};

export default ArticleWriteContents;
