import { useMutation, useQueryClient } from "@tanstack/react-query";
import deleteUser from "@/api/user/delete-user";
import useToast from "@/hooks/use-toast";
import { deleteCookie } from "@/utils/cookie-utils";

const useDeleteUser = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      toast.success("회원탈퇴를 성공했습니다 !");

      deleteCookie("accessToken");
      deleteCookie("refreshToken");

      queryClient.clear();

      window.location.href = "/signin";
    },
    onError: () => {
      toast.error("회원탈퇴를 실패했습니다 !");
    },
  });
};

export default useDeleteUser;
