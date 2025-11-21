import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import postGroup from "@/api/group/post-group";
import useToast from "@/hooks/use-toast";

const usePostGroup = () => {
  const queryClient = useQueryClient();
  const toast = useToast();
  const router = useRouter();

  return useMutation({
    mutationFn: postGroup,
    onSuccess: (data) => {
      toast.success("팀 생성이 성공했습니다 !");
      queryClient.invalidateQueries({ queryKey: ["userInfo"] });
      queryClient.invalidateQueries({ queryKey: ["groups"] });
      router.push(`/${data.id}`);
    },
    onError: () => {
      toast.error("팀 생성에 실패했습니다 !");
    },
  });
};

export default usePostGroup;
