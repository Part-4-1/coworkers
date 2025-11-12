import TeamThumbnail from "@/assets/images/ic-thumbnail-team.svg";
import Icon from "@/components/icon/Icon";
import ProfileList from "@/components/profile-list/profile-list";
import useMediaQuery from "@/hooks/use-media-query";
import { Member } from "@/types/members";
import cn from "@/utils/clsx";
import { MouseEventHandler } from "react";

interface TeamBannerMemberProps {
  groupName: string;
  members: Member[];
  onMemberListClick: MouseEventHandler;
  onSettingClick: MouseEventHandler;
}

const TeamBannerMember = ({
  groupName,
  members,
  onMemberListClick,
  onSettingClick,
}: TeamBannerMemberProps) => {
  const isPc = useMediaQuery("(min-width: 1280px)");
  return (
    <div
      className={cn(
        "flex h-[56px] w-full justify-between bg-white pl-[18px] pr-[16px]",
        "items-center tablet:h-[64px] tablet:rounded-[12px] tablet:pl-[26px] tablet:pr-[20px]",
        "relative min-w-[270px] overflow-hidden"
      )}
    >
      <section
        className={cn(
          "flex gap-[12px] text-xl font-bold text-blue-700 flex-center",
          "min-w-0 tablet:text-2xl"
        )}
      >
        <div className="truncate">{groupName}</div>
        <div onClick={onMemberListClick}>
          {isPc ? (
            ""
          ) : (
            <ProfileList members={members} className="w-[87px] shrink-0" />
          )}
        </div>
      </section>
      <section className="relative flex gap-[19px] flex-center">
        {isPc && (
          <TeamThumbnail className="absolute -bottom-[8px] right-[120px] scale-[1.8] text-[#C9DAFD]" />
        )}
        <div onClick={onSettingClick}>
          <Icon icon="setting" className="h-[24px] w-[24px]" />
        </div>
      </section>
    </div>
  );
};

export default TeamBannerMember;
