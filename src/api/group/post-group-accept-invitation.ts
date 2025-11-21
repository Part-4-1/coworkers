import instance from "@/utils/axios";

interface AcceptInvitationRequest {
  userEmail: string;
  token: string;
}

const postGroupAcceptInvitation = async (
  data: AcceptInvitationRequest
): Promise<{ groupId: number }> => {
  const response = await instance.post("/groups/accept-invitation", data);
  return response.data;
};

export default postGroupAcceptInvitation;
