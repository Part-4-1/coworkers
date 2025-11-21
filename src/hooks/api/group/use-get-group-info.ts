import getGroupInfo from "@/api/group/get-group-info";
import { useQuery } from "@tanstack/react-query";

const useGetGroupInfo = (groupId: number, date?: string) => {
  return useQuery({
    queryKey: ["group", groupId, date],
    queryFn: () => getGroupInfo(groupId),
    staleTime: 1000 * 60 * 5,
    enabled: !!groupId,
  });
};

export default useGetGroupInfo;
