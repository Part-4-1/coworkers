import TeamThumbnail from "@/assets/images/ic-thumbnail-team.svg";
import ProfileList from "@/components/profile-list/profile-list";
import useMediaQuery from "@/hooks/use-media-query";
import { Member } from "@/types/members";
import cn from "@/utils/clsx";
import Link from "next/link";
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
 * @param showProfileListonPc - PC 화면에서 ProfileList를 표시할지 여부를 결정합니다.
 */

interface TeamBannerMemberProps {
  groupId: number;
  groupName: string;
  members: Member[];
  onMemberListClick?: MouseEventHandler;
  className?: string;
  showProfileListonPc?: boolean;
}

const TeamBannerMember = ({
  groupId,
  groupName,
  members,
  onMemberListClick,
  className,
  showProfileListonPc = true,
}: TeamBannerMemberProps) => {
  const isPc = useMediaQuery("(min-width: 1280px)");
  return (
    <div
      className={cn(
        "relative flex h-[56px] w-full justify-between bg-white pl-[18px] pr-[16px]",
        "items-center tablet:h-[64px] tablet:rounded-[12px] tablet:pl-[26px] tablet:pr-[20px]",
        "min-w-[270px]",
        className
      )}
    >
      {isPc && (
        <div className="absolute inset-0 overflow-hidden">
          <TeamThumbnail className="absolute -bottom-[8px] right-[120px] scale-[1.8] text-blue-50" />
        </div>
      )}

      <section
        className={cn(
          "relative z-10 flex gap-[12px] text-xl font-bold text-blue-700 flex-center",
          "min-w-0 tablet:text-2xl"
        )}
      >
        <Link href={`/${groupId}`}>
          <p className="truncate font-bold text-blue-700 marker:text-2xl">
            {groupName}
          </p>
        </Link>
        <div onClick={onMemberListClick}>
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
      </section>
    </div>
  );
};

export default TeamBannerMember;
