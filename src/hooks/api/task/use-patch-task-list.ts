import patchTaskList from "@/api/task/patch-task-list";
import useToast from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const usePatchTaskList = (groupId: number) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: patchTaskList,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["group", groupId] });
      queryClient.invalidateQueries({
        queryKey: [
          "taskList",
          groupId,
          variables.taskListId,
          new Date().toLocaleDateString("sv-SE"),
        ],
      });
    },
    onError: () => toast.error("변경에 실패했습니다."),
  });
};

export default usePatchTaskList;
