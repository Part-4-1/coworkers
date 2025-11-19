import { useQueries, useQuery } from "@tanstack/react-query";
import getUserHistory from "@/api/user/get-user-history";
import getGroupInfo from "@/api/group/get-group-info";

const useGetUserHistory = (date: string, groupId: number) => {
  // return useQuery({
  //   queryKey: ["history", date],
  //   queryFn: () => getUserHistory(),
  //   staleTime: 1000 * 60 * 5,
  // });
  return useQueries({
    queries: [
      {
        queryKey: ["group", groupId],
        queryFn: () => getGroupInfo(groupId),
        staleTime: 1000 * 60 * 10,
        enabled: !!groupId,
      },
      {
        queryKey: ["history", date],
        queryFn: () => getUserHistory(),
        staleTime: 1000 * 60 * 5,
      },
    ],
  });
};

export default useGetUserHistory;
