import getTaskList from "@/api/task/get-task-list";
import { useQuery } from "@tanstack/react-query";

const useGetTaskList = (groupId: number, taskId: number, date?: string) => {
  return useQuery({
    queryKey: ["taskList", groupId, taskId, date],
    queryFn: () => getTaskList(groupId, taskId, date),
    staleTime: 1000 * 60 * 5,
    enabled: !!taskId,
  });
};

export default useGetTaskList;
