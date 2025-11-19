import postTaskList from "@/api/task/post-task-list";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const usePostTaskList = (groupId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postTaskList,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["group", groupId] });
    },
    onError: (error) => console.error(error),
  });
};

export default usePostTaskList;
