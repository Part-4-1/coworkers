import { Member } from "@/types/members";
import TeamMember from "./team-member/team-member";

interface TeamMembersSectionProps {
  members: Member[];
}

const TeamMembersSection = ({ members }: TeamMembersSectionProps) => {
  return (
    <div>
      <TeamMember member={members[0]} />
    </div>
  );
};

export default TeamMembersSection;
