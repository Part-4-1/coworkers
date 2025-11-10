import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTask } from "@/api/task/post-task";
import { CreateTaskPayload } from "@/types/task-modal.types";
import useToast from "@/hooks/use-toast";
interface UseCreateTaskParams {
  groupId: number;
  taskListId: number;
}

export const useCreateTask = (params: UseCreateTaskParams) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: (payload: CreateTaskPayload) => createTask(params, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tasks", params.groupId, params.taskListId],
      });
      toast.success("할 일 생성에 성공했습니다.");
    },
    onError: (error) => {
      console.error("Task creation failed:", error);
      toast.error("할 일 생성에 실패했습니다.");
    },
  });
};
