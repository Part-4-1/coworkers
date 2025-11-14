import { logoutAction } from "@/api/auth/logout-action";
import { useQueryClient } from "@tanstack/react-query";

export const useLogout = () => {
  const queryClient = useQueryClient();

  const handleLogout = async () => {
    logoutAction();
    queryClient.removeQueries({ queryKey: ["userInfo"] });
  };

  return { handleLogout };
};
