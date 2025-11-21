"use client";

import { logoutAction } from "@/api/auth/logout-action";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
export const useLogout = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const handleLogout = async () => {
    await logoutAction();
    queryClient.removeQueries();

    router.push("/signin");
  };

  return { handleLogout };
};
