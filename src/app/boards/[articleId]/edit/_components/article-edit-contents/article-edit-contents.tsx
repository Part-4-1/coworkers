"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import cn from "@/utils/clsx";
import { InputBox, ImageUpload, Button } from "@/components/index";
import usePatchArticle from "@/hooks/api/articles/use-patch-article";
import { Article } from "@/types/article";

interface ArticleEditContentsProps {
  article: Article;
}

interface EditFormData {
  title: string;
  content: string;
}

const ArticleEditContents = ({ article }: ArticleEditContentsProps) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditFormData>({
    defaultValues: {
      title: article.title,
      content: article.content,
    },
  });
  const { mutate, isPending } = usePatchArticle();
  const [images, setImages] = useState<string[]>(
    article.image ? [article.image] : []
  );

  const handleImagesChange = useCallback((imgs: string[]) => {
    setImages(imgs);
  }, []);

  const onSubmit = (data: EditFormData) => {
    mutate(
      {
        articleId: article.id,
        data: {
          title: data.title,
          content: data.content,
          image: images[0] || undefined,
        },
      },
      {
        onSuccess: () => {
          router.push(`/boards/${article.id}`);
        },
      }
    );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        "flex w-full flex-col gap-[48px] px-[22px] py-[45px]",
        "tablet:gap-[57px] tablet:px-[40px] tablet:py-[73px]",
        "pc:px-[70px]"
      )}
    >
      <div className="flex flex-col gap-[32px]">
        <h2 className="text-xl font-bold text-blue-700">게시글 수정</h2>

        <div className="flex flex-col items-start gap-3">
          <div className="flex items-center gap-[6px]">
            <span className="text-lg font-bold text-blue-700">제목</span>
            <span className="text-red-200">*</span>
          </div>
          <InputBox
            placeholder="제목을 입력해주세요."
            {...register("title", { required: "제목은 필수입니다" })}
          />
          {errors.title && (
            <span className="text-sm text-red-500">{errors.title.message}</span>
          )}
        </div>

        <div className="flex flex-col items-start gap-3">
          <div className="flex items-center gap-[6px]">
            <span className="text-lg font-bold text-blue-700">내용</span>
            <span className="text-red-200">*</span>
          </div>
          <InputBox
            placeholder="내용을 입력하세요."
            height="h-[200px] tablet:h-[240px]"
            {...register("content", { required: "내용은 필수입니다" })}
          />
          {errors.content && (
            <span className="text-sm text-red-500">
              {errors.content.message}
            </span>
          )}
        </div>

        <div className="flex flex-col items-start gap-3">
          <span className="text-lg font-bold text-blue-700">이미지</span>
          <ImageUpload
            maxCount={1}
            onImagesChange={handleImagesChange}
            initialImages={article.image ? [article.image] : []}
          />
        </div>
      </div>

      <Button
        variant="solid"
        type="submit"
        disabled={isPending}
        className={isPending ? "cursor-not-allowed opacity-50" : ""}
      >
        {isPending ? "수정중..." : "수정하기"}
      </Button>
    </form>
  );
};

export default ArticleEditContents;
