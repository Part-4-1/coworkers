import { useMutation, useQueryClient } from "@tanstack/react-query";
import patchTaskComment from "@/api/task/patch-task-comment";
import useToast from "@/hooks/use-toast";

const usePatchTaskComment = () => {
  const queryClient = useQueryClient();
  const { success, error } = useToast();

  return useMutation({
    mutationFn: patchTaskComment,
    onSuccess: () => {
      success("댓글이 수정되었습니다.");
      queryClient.invalidateQueries({
        queryKey: ["comments"],
      });
    },
    onError: () => {
      error("댓글 수정에 실패했습니다.");
    },
  });
};

export default usePatchTaskComment;
