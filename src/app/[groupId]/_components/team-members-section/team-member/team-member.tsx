import { Profile } from "@/components";
import useMediaQuery from "@/hooks/use-media-query";
import { Member } from "@/types/members";

interface TeamMemberProps {
  member: Member;
}

const TeamMember = ({ member }: TeamMemberProps) => {
  const isMobile = useMediaQuery("(max-width: 744px)");

  return (
    <div className="flex h-[68px] items-center justify-between rounded-[16px] bg-white tablet:h-[73px]">
      <div className="flex flex-col">
        <div className="flex flex-center">
          <div className="mr-[8px]">
            <Profile size={isMobile ? "sm" : "md"} image={member.userImage} />
          </div>
          <div className="text-md font-medium text-blue-700">
            {member.userName}
          </div>
        </div>
        <div className="text-xs font-normal text-blue-700">
          {member.userEmail}
        </div>
      </div>

      <div>케밥</div>
    </div>
  );
};

export default TeamMember;
