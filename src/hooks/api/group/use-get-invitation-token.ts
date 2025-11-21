import getInvitationToken from "@/api/group/get-invitation-token";
import { useQuery } from "@tanstack/react-query";

const useGetInvitationToken = (groupId: number) => {
  return useQuery({
    queryKey: ["group", groupId],
    queryFn: () => getInvitationToken(groupId),
    staleTime: 1000 * 60 * 5,
    enabled: !!groupId,
  });
};

export default useGetInvitationToken;
