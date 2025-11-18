"use client";

import { useRouter } from "next/navigation";
import { Button, Icon, Dropdown } from "@/components/index";
import { Article } from "@/types/article";
import { toKoreanDateString } from "@/utils/date-util";
import { useDeleteArticle } from "@/hooks/api/articles/use-delete-article";
import { useGetUserInfoQuery } from "@/hooks/api/user/use-get-user-info-query";
import useToast from "@/hooks/use-toast";

interface ArticleHeaderProps {
  article: Article;
}

const ArticleHeader = ({ article }: ArticleHeaderProps) => {
  const router = useRouter();
  const Toast = useToast();
  const { data: userInfo } = useGetUserInfoQuery();
  const createdAt = toKoreanDateString(article.createdAt);
  const { mutate: deleteArticleMutate, isPending } = useDeleteArticle();

  const isWriter = userInfo?.id === article.writer.id;

  const handleDelete = () => {
    if (confirm("정말 삭제하시겠습니까?")) {
      deleteArticleMutate(article.id, {
        onSuccess: () => {
          Toast.success("게시글 삭제에 성공했습니다.");
          router.push("/boards");
        },
        onError: () => {
          Toast.error("게시글 삭제에 실패했습니다.");
        },
      });
    }
  };

  return (
    <div className="flex w-full flex-col gap-4 pb-[16px] tablet:pb-[28px]">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-blue-700">{article.title}</h2>
        {isWriter && (
          <Dropdown
            trigger={
              <Button variant="none">
                <Icon icon="kebab" className="h-6 w-6" />
              </Button>
            }
            items={[
              {
                label: "수정하기",
                onClick: () => router.push(`/boards/${article.id}/edit`),
              },
              { label: "삭제하기", onClick: handleDelete },
            ]}
          />
        )}
      </div>
      <div className="flex items-center gap-2 border-b pb-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-blue-700 tablet:text-md">
            {article.writer.nickname}
          </span>
          <div className="h-3 w-[1px] bg-blue-600"></div>
          <span className="text-xs font-medium text-gray-700 tablet:text-md">
            {createdAt}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleHeader;
