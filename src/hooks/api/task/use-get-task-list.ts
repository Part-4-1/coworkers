import getTaskList from "@/api/task/get-task-list";
import { useQuery } from "@tanstack/react-query";

const useGetTaskList = (groupId: number, taskId: number) => {
  return useQuery({
    queryKey: ["taskList", groupId, taskId],
    queryFn: () => getTaskList(groupId, taskId),
    staleTime: 1000 * 60 * 5,
    enabled: !!taskId,
  });
};

export default useGetTaskList;
