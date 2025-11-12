import Icon from "@/components/icon/Icon";
import ProfileList from "@/components/profile-list/profile-list";
import useMediaQuery from "@/hooks/use-media-query";
import { Member } from "@/types/members";
import cn from "@/utils/clsx";
import { MouseEventHandler } from "react";

interface TeamBannerHeaderProps {
  groupName: string;
  members: Member[];
  onSettingClick: MouseEventHandler;
  onMemberListClick: MouseEventHandler;
}

const TeamBannerHeader = ({
  groupName,
  members,
  onSettingClick,
  onMemberListClick,
}: TeamBannerHeaderProps) => {
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
        className="flex gap-[8px] font-bold flex-center tablet:gap-[12px]"
        onClick={onMemberListClick}
      >
        {groupName}
        {isPc ? "" : <ProfileList members={members} />}
      </div>

      {isPc ? (
        ""
      ) : (
        <div onClick={onSettingClick}>
          <Icon
            icon="setting"
            className="h-[20px] w-[20px] cursor-pointer tablet:h-[24px] tablet:w-[24px]"
          />
        </div>
      )}
    </div>
  );
};

export default TeamBannerHeader;
