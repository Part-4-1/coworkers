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
    onMutate: async () => {
      const prevData = queryClient.getQueryData([
        "taskDetail",
      ]) as TaskDetailData;
      return prevData;
    },
    onSettled: (data, err, variables, prevData) => {
      queryClient.setQueryData(["taskDetail"], {
        ...prevData,
        doneAt: prevData?.doneAt ? null : new Date().toISOString(),
      });
    },
    onSuccess: (data, variables, prevData) => {
      data.doneAt !== prevData?.doneAt &&
        queryClient.invalidateQueries({
          queryKey: [
            "taskItems",
            variables.groupId,
            variables.taskListId,
            data.date,
          ],
        });
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export default usePatchTaskDetail;
