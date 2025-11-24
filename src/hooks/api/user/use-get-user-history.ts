import { useQuery } from "@tanstack/react-query";
import getUserHistory from "@/api/user/get-user-history";

const useGetUserHistory = () => {
  return useQuery({
    queryKey: ["history"],
    queryFn: () => getUserHistory(),
  });
};

export default useGetUserHistory;
