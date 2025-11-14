import Button from "@/components/button/button";
import Profile from "@/components/profile/profile";
import useMediaQuery from "@/hooks/use-media-query";
import { Member } from "@/types/members";
import cn from "@/utils/clsx";

interface ProfileListProps {
  members: Member[];
  className?: string;
}

const MAX_VISIBLE = 3;

const ProfileList = ({ members, className }: ProfileListProps) => {
  const visibleMembers = members.slice(0, MAX_VISIBLE);
  const isTablet = useMediaQuery("(min-width: 744px)");
  const profileSize = isTablet ? "sm" : "xs";

  return (
    <Button
      variant="none"
      className={cn(
        "flex h-[28px] justify-between rounded-[8px] border-[1px] border-gray-300 py-[4px] pl-[4px] pr-[8px]",
        "gap-[12px] tablet:h-[32px]",
        className
      )}
    >
      <div className="flex flex-center">
        {visibleMembers.map((member, index) => (
          <div
            key={member.userId}
            className={cn("relative -mr-[6px] overflow-hidden")}
            style={{ zIndex: MAX_VISIBLE - index }}
          >
            <Profile
              image={member.userImage}
              size={profileSize}
              isMobileCircle={false}
              className="rounded-[8px] border-[1px] border-white"
            />
          </div>
        ))}
      </div>
      <div className="text-sm font-medium text-gray-800">{members.length}</div>
    </Button>
  );
};

export default ProfileList;
