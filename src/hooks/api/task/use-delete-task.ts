import deleteTask from "@/api/task/delete-task";
import useToast from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteTask = (date: string) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: deleteTask,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["taskItems", variables.groupId, variables.taskListId, date],
      });
      queryClient.invalidateQueries({ queryKey: ["group", variables.groupId] });

      toast.success("할 일이 삭제되었습니다.");
    },
    onError: (error) => {
      console.error(error);
      toast.error("할 일 삭제에 실패했습니다.");
    },
  });
};

export default useDeleteTask;
