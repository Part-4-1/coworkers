import { useQuery } from "@tanstack/react-query";
import { getArticles } from "@/api/articles/get-articles";

export const useGetArticles = (
  page: number = 1,
  pageSize: number = 6,
  orderBy: string = "recent",
  keyword?: string
) => {
  return useQuery({
    queryKey: ["articles", page, pageSize, orderBy, keyword],
    queryFn: () =>
      getArticles({
        page,
        pageSize,
        orderBy,
        keyword,
      }),
    placeholderData: (previousData) => previousData,
  });
};
