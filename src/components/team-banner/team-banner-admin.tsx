import Icon from "@/components/icon/Icon";
import useMediaQuery from "@/hooks/use-media-query";
import { Member } from "@/types/members";
import cn from "@/utils/clsx";
import { MouseEventHandler } from "react";
import TeamBannerBody from "./team-banner-components/team-banner-body";
import TeamBannerHeader from "./team-banner-components/team-banner-header";

interface TeamBannerAdminProps {
  groupName: string;
  tasksTodo: number;
  tasksDone: number;
  members: Member[];
  onSettingClick: MouseEventHandler;
  onMemberListClick: MouseEventHandler;
}

const teamBannerAdmin = ({
  groupName,
  tasksTodo,
  tasksDone,
  members,
  onMemberListClick,
  onSettingClick,
}: TeamBannerAdminProps) => {
  const isPc = useMediaQuery("(min-width: 1280px)");
  return (
    <div
      className={cn(
        "h-[196px] w-full justify-between pb-[30px] pl-[25px] pr-[28px] pt-[20px] tablet:rounded-[20px]",
        "max-w-[1120px] tablet:h-[239px] tablet:pb-[34px] tablet:pt-[30px] pc:pr-[36px] pc:pt-[32px]",
        "flex min-w-[300px] flex-col justify-between bg-white shadow-xl"
      )}
    >
      <TeamBannerHeader
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
        <TeamBannerBody tasksTodo={tasksTodo} tasksDone={tasksDone} />
        <div onClick={onSettingClick} className="flex cursor-pointer items-end">
          {isPc && <Icon icon="setting" className="h-[24px] w-[24px]" />}
        </div>
      </div>
    </div>
  );
};

export default teamBannerAdmin;
