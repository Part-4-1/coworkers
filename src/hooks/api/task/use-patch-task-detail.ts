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
    onSuccess: (data, _, prevData) => {
      data?.data.doneAt !== prevData.doneAt &&
        queryClient.invalidateQueries({ queryKey: ["taskDetail"] });
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export default usePatchTaskDetail;
