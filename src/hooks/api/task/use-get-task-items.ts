import getTaskItems from "@/api/task/get-task-items";
import { useQuery } from "@tanstack/react-query";

const useGetTaskItems = (groupId: number, taskListId: number, date: string) => {
  return useQuery({
    queryKey: ["taskItems", groupId, taskListId, date],
    queryFn: () => getTaskItems(groupId, taskListId, date),
    staleTime: 1000 * 60 * 5,
    enabled: !!taskListId && !!date,
  });
};

export default useGetTaskItems;
