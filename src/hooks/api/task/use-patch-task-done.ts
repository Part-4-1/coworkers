import patchTaskDetail from "@/api/task/patch-task-detail";
import { TaskDetailData } from "@/types/task-detail";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const usePatchTaskDone = (
  groupId: number,
  taskListId: number,
  date: string
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: patchTaskDetail,
    onMutate: () => {
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
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["taskItems", groupId, taskListId, date],
      });
      queryClient.invalidateQueries({
        queryKey: ["taskDetail", groupId, taskListId, variables.taskId],
      });
      queryClient.invalidateQueries({
        queryKey: ["group", groupId],
      });
    },
    onError: (error) => {
      console.error("완료하지 못했습니다.", error);
    },
  });
};

export default usePatchTaskDone;
