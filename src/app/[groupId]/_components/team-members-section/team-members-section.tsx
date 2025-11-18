import { Member } from "@/types/members";
import TeamMember from "./team-member/team-member";

interface TeamMembersSectionProps {
  members: Member[];
}

const TeamMembersSection = ({ members }: TeamMembersSectionProps) => {
  return (
    <div className="flex flex-col gap-[24px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[8px]">
          <span className="text-lg font-medium text-blue-700">멤버</span>
          <span className="text-lg text-gray-800">({members.length}명)</span>
        </div>
        <div className="cursor-pointer text-md text-blue-200">
          + 새로운 멤버 초대하기
        </div>
      </div>
      <div className="grid w-full grid-cols-2 gap-[12px] tablet:grid-cols-3 pc:grid-cols-3">
        {members.map((member) => (
          <TeamMember key={member.userId} member={member} />
        ))}
      </div>
    </div>
  );
};

export default TeamMembersSection;
