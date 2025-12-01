import deleteTaskComment from "@/api/task/delete-task-comment";
import useToast from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

const useDeleteTaskComment = () => {
  const queryClient = useQueryClient();
  const { success, error } = useToast();

  return useMutation({
    mutationFn: deleteTaskComment,
    onSuccess: () => {
      success("댓글이 삭제되었습니다.");
      queryClient.invalidateQueries({
        queryKey: ["comments"],
      });
    },
    onError: (err: AxiosError) => {
      err.response?.status === 403
        ? error(err.message)
        : error("댓글 삭제에 실패했습니다.");
    },
  });
};

export default useDeleteTaskComment;
