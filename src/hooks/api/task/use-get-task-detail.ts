import getTaskDetail from "@/api/task/get-task-detail";
import { useQuery } from "@tanstack/react-query";

const useGetTaskDetail = (
  groupId: number,
  taskListId: number,
  taskId: number
) => {
  return useQuery({
    queryKey: ["taskDetail"],
    queryFn: () => getTaskDetail(groupId, taskListId, taskId),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    retry: 1,
  });
};

export default useGetTaskDetail;
