import getInvitationToken from "@/api/group/get-invitation-token";
import { useQuery } from "@tanstack/react-query";

const useGetInvitationToken = (groupId: number) => {
  return useQuery({
    queryKey: ["group", groupId, "invitationToken"],
    queryFn: () => getInvitationToken(groupId),
  });
};

export default useGetInvitationToken;
