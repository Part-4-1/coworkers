import TeamThumbnail from "@/assets/images/ic-thumbnail-team.svg";
import Icon from "@/components/icon/Icon";
import ProfileList from "@/components/profile-list/profile-list";
import useMediaQuery from "@/hooks/use-media-query";
import { Member } from "@/types/members";
import cn from "@/utils/clsx";
import { MouseEventHandler } from "react";

/**
 * @author jinhyuk
 * @description
 * 팀 멤버용 배너 컴포넌트입니다.
 * @param groupName - 팀(그룹) 이름
 * @param members - 팀 멤버 목록
 * @param onMemberListClick - 멤버 리스트 클릭 시 실행되는 핸들러
 * @param onSettingClick - 설정 아이콘 클릭 시 실행되는 핸들러
 * @param className - 추가 스타일을 위해 사용
 *
 */

interface TeamBannerMemberProps {
  groupName: string;
  members: Member[];
  onMemberListClick?: MouseEventHandler;
  onSettingClick: MouseEventHandler;
  className?: string;
  isProfileList?: boolean;
}

const TeamBannerMember = ({
  groupName,
  members,
  onMemberListClick,
  onSettingClick,
  className,
  isProfileList = true,
}: TeamBannerMemberProps) => {
  const isPc = useMediaQuery("(min-width: 1280px)");
  return (
    <div
      className={cn(
        "flex h-[56px] w-full justify-between bg-white pl-[18px] pr-[16px]",
        "items-center tablet:h-[64px] tablet:rounded-[12px] tablet:pl-[26px] tablet:pr-[20px]",
        "relative min-w-[270px] overflow-hidden",
        className
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
          {isPc
            ? ""
            : isProfileList && (
                <ProfileList members={members} className="w-[87px] shrink-0" />
              )}
        </div>
      </section>
      <section className="relative flex gap-[19px] flex-center">
        {isPc && (
          <TeamThumbnail className="absolute -bottom-[8px] right-[120px] scale-[1.8] text-blue-50" />
        )}
        <div onClick={onSettingClick} className="cursor-pointer">
          <Icon icon="setting" className="h-[24px] w-[24px]" />
        </div>
      </section>
    </div>
  );
};

export default TeamBannerMember;
