import getComments from "@/api/comments/get-comments";
import { useQuery } from "@tanstack/react-query";

const useGetComments = (taskId: number) => {
  return useQuery({
    queryKey: ["comments"],
    queryFn: () => getComments(taskId),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    enabled: !!taskId,
  });
};

export default useGetComments;
