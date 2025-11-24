"use client";

import { InviteMemberModalUI } from "@/components/index";
import useGetInvitationToken from "@/hooks/api/group/use-get-invitation-token";
import usePrompt from "@/hooks/use-prompt";
import useToast from "@/hooks/use-toast";
import { Member } from "@/types/members";
import TeamMember from "./_components/team-member";

interface TeamMembersSectionProps {
  members: Member[];
  groupId: number;
}
const TeamMembersSection = ({ members, groupId }: TeamMembersSectionProps) => {
  const { Modal, openPrompt, closePrompt } = usePrompt(true);
  const { data: invitationToken } = useGetInvitationToken(groupId);
  const { success, error } = useToast();
  const sortedMembers = [
    ...members.filter((member) => member.role === "ADMIN"),
    ...members.filter((member) => member.role !== "ADMIN"),
  ];

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(invitationToken);
      success("초대링크가 클립보드에 복사되었습니다.");
    } catch (err) {
      error("초대링크 복사에 실패했습니다. 다시 시도해주세요.");
    } finally {
      closePrompt();
    }
  };

  return (
    <div className="flex flex-col gap-[24px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[8px]">
          <span className="text-lg font-medium text-blue-700">멤버</span>
          <span className="text-lg text-gray-800">({members.length}명)</span>
        </div>
        <div
          className="cursor-pointer text-md text-blue-200"
          onClick={openPrompt}
        >
          + 새로운 멤버 초대하기
        </div>
      </div>
      <div className="grid w-full grid-cols-2 gap-[12px] tablet:grid-cols-3 pc:grid-cols-3">
        {sortedMembers.map((member) => (
          <TeamMember
            key={member.userId}
            member={member}
            isAdmin={member.role === "ADMIN"}
          />
        ))}
      </div>
      <Modal>
        <InviteMemberModalUI onClick={handleCopyLink} />
      </Modal>
    </div>
  );
};

export default TeamMembersSection;
