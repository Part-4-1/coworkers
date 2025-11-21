import postTaskList from "@/api/task/post-task-list";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const usePostTaskList = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postTaskList,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["group", variables.groupId] });
    },
    onError: (error) => console.error(error),
  });
};

export default usePostTaskList;
