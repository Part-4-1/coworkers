import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import postGroupAcceptInvitation from "@/api/group/post-group-accept-invitation";
import useToast from "@/hooks/use-toast";
import { AxiosError } from "axios";

const usePostGroupAcceptInvitation = () => {
  const queryClient = useQueryClient();
  const toast = useToast();
  const router = useRouter();

  return useMutation({
    mutationFn: postGroupAcceptInvitation,
    onSuccess: (data) => {
      toast.success("팀 참여에 성공했습니다 !");
      queryClient.invalidateQueries({ queryKey: ["userInfo"] });
      queryClient.invalidateQueries({ queryKey: ["groups"] });
      router.replace(`/${data.groupId}`);
    },
    onError: (error: AxiosError<{ message: string }>) => {
      const message =
        error.response?.data?.message || "팀 참여에 실패했습니다.";
      toast.error(message);
    },
  });
};

export default usePostGroupAcceptInvitation;
