import deleteTaskList from "@/api/task/delete-task-list";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteTaskList = (groupId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTaskList,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["group", groupId],
      }),
  });
};

export default useDeleteTaskList;
