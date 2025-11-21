import ProfileList from "@/components/profile-list/profile-list";
import useMediaQuery from "@/hooks/use-media-query";
import { Member } from "@/types/members";
import cn from "@/utils/clsx";
import { MouseEventHandler } from "react";

interface TeamBannerAdminHeaderProps {
  groupName?: string;
  members: Member[];
  onMemberListClick?: MouseEventHandler;
  showProfileListonPc?: boolean;
}

const TeamBannerAdminHeader = ({
  groupName,
  members,
  onMemberListClick,
  showProfileListonPc = true,
}: TeamBannerAdminHeaderProps) => {
  const isPc = useMediaQuery("(min-width: 1280px)");
  const isTablet = useMediaQuery("(min-width: 744px) and (max-width: 1280px)");

  return (
    <div
      className={cn(
        "flex justify-between gap-[8px] text-xl",
        isTablet && "gap-[12px] text-2xl",
        isPc && "text-2xl"
      )}
    >
      <div
        className="flex min-w-0 gap-[8px] font-bold text-blue-700 flex-center tablet:gap-[12px]"
        onClick={onMemberListClick}
      >
        <div className="truncate">{groupName}</div>
        {isPc ? (
          showProfileListonPc && (
            <ProfileList
              members={members}
              className="max-w-[75px] shrink-0 tablet:max-w-[87px]"
            />
          )
        ) : (
          <ProfileList
            members={members}
            className="max-w-[75px] shrink-0 tablet:max-w-[87px]"
          />
        )}
      </div>
    </div>
  );
};

export default TeamBannerAdminHeader;
