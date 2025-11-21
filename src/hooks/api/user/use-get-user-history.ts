import { useQuery } from "@tanstack/react-query";
import getUserHistory from "@/api/user/get-user-history";

const useGetUserHistory = (groupId: number) => {
  return useQuery({
    queryKey: ["history", groupId],
    queryFn: () => getUserHistory(),
    staleTime: 1000 * 60 * 5,
  });
};

export default useGetUserHistory;
