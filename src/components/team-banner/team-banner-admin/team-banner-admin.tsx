import Dropdown from "@/components/dropdown-components/dropdown";
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
  onMemberListClick: MouseEventHandler;
  showProfileListOnPc?: boolean;
  className?: string;
}

const TeamBannerAdmin = ({
  groupName,
  tasksTodo,
  tasksDone,
  members,
  onMemberListClick,
  showProfileListOnPc = true,
  className,
}: TeamBannerAdminProps) => {
  const isPc = useMediaQuery("(min-width: 1280px)");
  return (
    <div
      className={cn(
        "h-[196px] w-full justify-between pb-[30px] pl-[25px] pr-[28px] pt-[20px] tablet:rounded-[20px]",
        "max-w-[1120px] tablet:h-[239px] tablet:pb-[34px] tablet:pt-[30px] pc:pr-[36px] pc:pt-[32px]",
        "relative flex min-w-[270px] flex-col justify-between bg-white shadow-xl",
        className
      )}
    >
      {!isPc && (
        <div className="absolute right-[24px] top-[24px] tablet:right-[28px] tablet:top-[34px]">
          <Dropdown
            trigger={
              <Icon
                icon="setting"
                className="h-[20px] w-[20px] cursor-pointer tablet:h-[24px] tablet:w-[24px]"
              />
            }
            items={[{ label: "수정하기" }, { label: "삭제하기" }]}
            menuAlign="start"
            //TODO: 추후 로직 추가
          />
        </div>
      )}

      <TeamBannerAdminHeader
        groupName={groupName}
        members={members}
        onMemberListClick={onMemberListClick}
        showProfileListonPc={showProfileListOnPc}
      />
      <div
        className={cn(
          "flex h-[84px] w-full justify-center gap-[22px]",
          "tablet:h-[108px]"
        )}
      >
        <TeamBannerAdminBody tasksTodo={tasksTodo} tasksDone={tasksDone} />

        <div className="flex items-end">
          {isPc && (
            <Dropdown
              trigger={
                <Icon
                  icon="setting"
                  className="h-[24px] w-[24px] cursor-pointer"
                />
              }
              items={[
                {
                  label: "수정하기",
                },
                {
                  label: "삭제하기",
                },
                //TODO: 클릭시 로직 추가
              ]}
              menuAlign="start"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamBannerAdmin;
