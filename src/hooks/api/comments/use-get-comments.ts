import getComments from "@/api/comments/get-comments";
import { useQuery } from "@tanstack/react-query";

const useGetComments = (taskId: number) => {
  return useQuery({
    queryKey: ["comments", taskId],
    queryFn: () => getComments(taskId),
    staleTime: 1000 * 60 * 5,
    enabled: !!taskId,
  });
};

export default useGetComments;
