import getUserGroups from "@/api/user/get-user-groups";
import { useQuery } from "@tanstack/react-query";

const useGetUserGroups = (groupId: string) => {
  return useQuery({
    queryKey: ["userGroups", groupId],
    queryFn: () => getUserGroups(),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    retry: 1,
  });
};

export default useGetUserGroups;
