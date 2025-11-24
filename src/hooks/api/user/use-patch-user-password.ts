import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import patchUserPassword from "@/api/user/patch-user-password";
import useToast from "@/hooks/use-toast";
import { deleteCookie } from "@/utils/cookie-utils";

const usePatchUserPassword = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const toast = useToast();

  return useMutation({
    mutationFn: patchUserPassword,
    onSuccess: () => {
      toast.success("비밀번호 변경에 성공했습니다! 다시 로그인해주세요.");

      deleteCookie("accessToken");
      deleteCookie("refreshToken");

      queryClient.clear();

      router.push("/signin");
    },
    onError: () => {
      toast.error("비밀번호 변경에 실패했습니다 !");
    },
  });
};

export default usePatchUserPassword;
