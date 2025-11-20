import { useMutation, useQueryClient } from "@tanstack/react-query";
import postGroup from "@/api/group/post-group";
import useToast from "@/hooks/use-toast";

const usePostGroup = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: postGroup,
    onSuccess: () => {
      toast.success("팀 생성이 성공했습니다 !");
      queryClient.invalidateQueries({ queryKey: ["groups"] });
    },
    onError: () => {
      toast.error("팀 생성에 실패했습니다 !");
    },
  });
};

export default usePostGroup;
