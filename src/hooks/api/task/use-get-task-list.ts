import getTaskList from "@/api/task/get-task-list";
import { useQuery } from "@tanstack/react-query";

const useGetTaskList = (groupId: number, taskListId: number, date: string) => {
  return useQuery({
    queryKey: ["taskList", groupId, taskListId, date],
    queryFn: () => getTaskList(groupId, taskListId, date),
    staleTime: 1000 * 60 * 5,
    enabled: !!taskListId && !!date,
  });
};

export default useGetTaskList;
