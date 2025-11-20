import patchTaskDetail from "@/api/task/patch-task-detail";
import useToast from "@/hooks/use-toast";
import { TaskDetailData } from "@/types/task-detail";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const usePatchTaskDone = (
  groupId: number,
  taskListId: number,
  date: string
) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: patchTaskDetail,
    onMutate: async () => {
      const prevData = queryClient.getQueryData([
        "taskItems",
        groupId,
        taskListId,
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
        ["taskItems", groupId, taskListId, date],
        prevTaskItems
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["taskItems", groupId, taskListId, date],
      });
    },
    onError: () => {
      toast.error("완료하지 못했습니다.");
    },
  });
};

export default usePatchTaskDone;
