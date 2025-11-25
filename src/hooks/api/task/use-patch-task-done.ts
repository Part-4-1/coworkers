import patchTaskDetail from "@/api/task/patch-task-detail";
import { TaskDetailData } from "@/types/task-detail";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const usePatchTaskDone = (date: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: patchTaskDetail,
    onMutate: (variables) => {
      const prevData = queryClient.getQueryData([
        "taskItems",
        variables.groupId,
        variables.taskListId,
        date,
      ]) as TaskDetailData[];
      return prevData;
    },
    onSettled: (data, err, variables, prevData) => {
      const prevTaskItems = prevData?.map((item) => {
        if (item.id === variables.taskId) {
          return {
            ...item,
            doneAt: item.doneAt ? null : new Date().toISOString(),
          };
        }
        return item;
      });

      queryClient.setQueryData(
        ["taskItems", variables.groupId, variables.taskListId, date],
        prevTaskItems
      );
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["taskItems", variables.groupId, variables.taskListId, date],
      });
      queryClient.invalidateQueries({
        queryKey: ["taskDetail", variables.groupId, variables.taskListId],
      });
      queryClient.invalidateQueries({
        queryKey: ["group", variables.groupId],
      });
      queryClient.invalidateQueries({
        queryKey: ["history"],
      });
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export default usePatchTaskDone;
