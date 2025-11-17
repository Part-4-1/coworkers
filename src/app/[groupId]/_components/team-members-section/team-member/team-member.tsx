import { Icon, Profile } from "@/components";
import useMediaQuery from "@/hooks/use-media-query";
import { Member } from "@/types/members";

interface TeamMemberProps {
  member: Member;
}

const TeamMember = ({ member }: TeamMemberProps) => {
  const isMobile = useMediaQuery("(max-width: 744px)");

  return (
    <div className="flex h-[68px] items-center justify-between rounded-[16px] bg-white py-[12px] pl-[16px] pr-[19px] tablet:h-[73px]">
      <div className="flex min-w-0 flex-col gap-[6px] truncate">
        <div className="flex items-center">
          <div className="mr-[8px] flex-shrink-0">
            <Profile
              size={isMobile ? "sm" : "md"}
              image={member.userImage}
              isMobileCircle={false}
            />
          </div>
          <div className="truncate text-md font-medium text-blue-700">
            {member.userName}
          </div>
        </div>
        <div className="truncate text-xs font-normal text-blue-700">
          {member.userEmail}
        </div>
      </div>

      <div>
        <Icon
          icon="kebab"
          className="h-[20px] w-[20px] cursor-pointer text-gray-400"
        />
      </div>
    </div>
  );
};

export default TeamMember;
