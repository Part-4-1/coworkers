import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createComment } from "@/api/comments/post-comments";
import useToast from "@/hooks/use-toast";

export const useCreateComment = (taskId: number) => {
  const queryClient = useQueryClient();
  const { success, error } = useToast();

  return useMutation({
    mutationFn: (content: string) => createComment({ taskId, content }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", taskId] });
      queryClient.invalidateQueries({ queryKey: ["taskDetail"] });
      success("댓글이 작성되었습니다.");
    },

    onError: () => {
      error("댓글 작성에 실패했습니다.");
    },
  });
};
