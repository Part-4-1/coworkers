import { useMutation, useQueryClient } from "@tanstack/react-query";
import patchUser from "@/api/user/patch-user";
import useToast from "@/hooks/use-toast";

const usePatchUser = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: patchUser,
    onSuccess: () => {
      toast.success("회원정보 변경에 성공했습니다.");
      queryClient.invalidateQueries({ queryKey: ["userInfo"] });
    },
    onError: () => {
      toast.error("회원정보 변경에 실패했습니다.");
    },
  });
};

export default usePatchUser;
