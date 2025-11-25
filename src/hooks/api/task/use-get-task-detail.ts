import getTaskDetail from "@/api/task/get-task-detail";
import { useQuery } from "@tanstack/react-query";

const useGetTaskDetail = (
  groupId: number,
  taskListId: number,
  taskId: number
) => {
  return useQuery({
    queryKey: ["taskDetail", groupId, taskListId, taskId],
    queryFn: () => getTaskDetail(groupId, taskListId, taskId),
    staleTime: 1000 * 60 * 5,
    gcTime: 0,
    retry: 1,
    enabled: !!taskId,
  });
};

export default useGetTaskDetail;
