import getTaskItems from "@/api/task/get-task-items";
import { useQuery } from "@tanstack/react-query";

const useGetTaskItems = (groupId: number, taskId: number, date: string) => {
  return useQuery({
    queryKey: ["taskItems", groupId, taskId, date],
    queryFn: () => getTaskItems(groupId, taskId, date),
    staleTime: 1000 * 60 * 5,
    enabled: !!taskId,
  });
};

export default useGetTaskItems;
