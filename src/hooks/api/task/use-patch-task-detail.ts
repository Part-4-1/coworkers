import patchTaskDetail, { PatchData } from "@/api/task/patch-task-detail";
import { TaskDetailData } from "@/types/task-detail";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export interface PatchTaskDetailData {
  groupId: number;
  taskListId: number;
  taskId: number;
  data: PatchData;
}

const usePatchTaskDetail = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: patchTaskDetail,
    onMutate: async (variables) => {
      const prevData = queryClient.getQueryData([
        "taskDetail",
        variables.groupId,
        variables.taskListId,
        variables.taskId,
      ]) as TaskDetailData;

      return prevData;
    },
    onSettled: (data, err, variables, prevData) => {
      queryClient.setQueryData(
        [
          "taskDetail",
          variables.groupId,
          variables.taskListId,
          variables.taskId,
        ],
        {
          ...prevData,
          doneAt: variables.data.done ? new Date().toISOString() : null,
        }
      );
    },
    onSuccess: (data, variables, prevData) => {
      if (data.doneAt !== prevData?.doneAt) {
        queryClient.invalidateQueries({
          queryKey: ["group", variables.groupId],
        });
      }

      queryClient.invalidateQueries({
        queryKey: [
          "taskItems",
          variables.groupId,
          variables.taskListId,
          new Date(data.date).toLocaleDateString("sv-SE"),
        ],
      });

      queryClient.invalidateQueries({
        queryKey: [
          "taskDetail",
          variables.groupId,
          variables.taskListId,
          variables.taskId,
        ],
      });
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export default usePatchTaskDetail;
