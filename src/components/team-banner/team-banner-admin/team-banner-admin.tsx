import Icon from "@/components/icon/Icon";
import useMediaQuery from "@/hooks/use-media-query";
import { Member } from "@/types/members";
import cn from "@/utils/clsx";
import { MouseEventHandler } from "react";
import TeamBannerAdminBody from "./team-banner-admin-body";
import TeamBannerAdminHeader from "./team-banner-admin-header";

/**
 * @author jinhyuk
 * @description
 * 팀 관리자용 배너 컴포넌트입니다.
 * @param groupName - 팀(그룹) 이름
 * @param tasksTodo - 총 task의 수
 * @param tasksDone - 완료한 task의 수
 * @param members - 팀 멤버 목록
 * @param onMemberListClick - 멤버 리스트 클릭 시 실행되는 핸들러
 * @param onSettingClick - 설정 아이콘 클릭 시 실행되는 핸들러
 * @param className - 추가 스타일을 위해 사용
 *
 */

interface TeamBannerAdminProps {
  groupName: string;
  tasksTodo: number;
  tasksDone: number;
  members: Member[];
  onSettingClick: MouseEventHandler;
  onMemberListClick: MouseEventHandler;
  className?: string;
}

const TeamBannerAdmin = ({
  groupName,
  tasksTodo,
  tasksDone,
  members,
  onMemberListClick,
  onSettingClick,
  className,
}: TeamBannerAdminProps) => {
  const isPc = useMediaQuery("(min-width: 1280px)");
  return (
    <div
      className={cn(
        "h-[196px] w-full justify-between pb-[30px] pl-[25px] pr-[28px] pt-[20px] tablet:rounded-[20px]",
        "max-w-[1120px] tablet:h-[239px] tablet:pb-[34px] tablet:pt-[30px] pc:pr-[36px] pc:pt-[32px]",
        "flex min-w-[270px] flex-col justify-between bg-white shadow-xl",
        className
      )}
    >
      <TeamBannerAdminHeader
        groupName={groupName}
        members={members}
        onSettingClick={onSettingClick}
        onMemberListClick={onMemberListClick}
      />
      <div
        className={cn(
          "flex h-[84px] w-full justify-center gap-[22px]",
          "tablet:h-[108px]"
        )}
      >
        <TeamBannerAdminBody tasksTodo={tasksTodo} tasksDone={tasksDone} />
        <div onClick={onSettingClick} className="flex cursor-pointer items-end">
          {isPc && <Icon icon="setting" className="h-[24px] w-[24px]" />}
        </div>
      </div>
    </div>
  );
};

export default TeamBannerAdmin;
