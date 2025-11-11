import patchTaskDetail, { PatchData } from "@/api/task/patch-task-detail";
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
    mutationFn: ({ groupId, taskListId, taskId, data }: PatchTaskDetailData) =>
      patchTaskDetail(groupId, taskListId, taskId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["taskDetail"] });
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export default usePatchTaskDetail;
