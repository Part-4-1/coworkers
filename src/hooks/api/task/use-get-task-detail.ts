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
    retry: 1,
    enabled: !!taskId,
  });
};

export default useGetTaskDetail;
