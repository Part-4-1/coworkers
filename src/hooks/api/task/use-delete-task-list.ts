import deleteTaskList from "@/api/task/delete-task-list";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteTaskList = ({ groupId }: { groupId: number }) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTaskList,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["taskList", groupId],
      }),
  });
};

export default useDeleteTaskList;
