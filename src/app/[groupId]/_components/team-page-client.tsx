"use client";

import { TeamBannerAdmin } from "@/components/index";
import BannerAdminSkeleton from "@/components/skeleton/team-skeleton/banner-admin-skeleton";
import TeamBodySkeleton from "@/components/skeleton/team-skeleton/team-body-skeleton";
import TeamMemberSectionSkeleton from "@/components/skeleton/team-skeleton/team-member-section-skeleton";
import useGetGroupInfo from "@/hooks/api/group/use-get-group-info";
import { useGetUserInfoQuery } from "@/hooks/api/user/use-get-user-info-query";
import cn from "@/utils/clsx";
import { getTasksDone, getTasksTodo } from "@/utils/getTasksCounts";
import { isUserAdmin } from "@/utils/isUserAdmin";
import TeamBody from "./team-body/team-body";
import TeamMembersSection from "./team-members-section/team-members-section";
interface TeamPageClientProps {
  groupId: number;
}

const TeamPageClient = ({ groupId }: TeamPageClientProps) => {
  const { data: userInfo } = useGetUserInfoQuery();
  const { data: groupInfo, isPending } = useGetGroupInfo(groupId);
  const isAdmin = isUserAdmin(userInfo, groupId);

  if (isPending || !groupInfo || !userInfo) {
    return (
      <div
        className={cn(
          "flex flex-col",
          "tablet:px-[24px] tablet:pt-[74px]",
          "mx-auto min-w-[360px] pt-[52px] pc:w-[1120px] pc:pt-[120px]"
        )}
      >
        <section className="pc:flex pc:justify-center">
          <BannerAdminSkeleton />
        </section>
        <section className="pc:mx-auto pc:w-full pc:max-w-[1120px]">
          <TeamBodySkeleton />
        </section>
        <section className="mb-[290px] mt-[48px] px-[16px] tablet:mb-[230px] tablet:px-[0px] pc:mx-auto pc:mb-[67px] pc:w-full pc:max-w-[1120px]">
          <TeamMemberSectionSkeleton />
        </section>
      </div>
    );
  }
  const tasksTodo = getTasksTodo(groupInfo.taskLists);
  const tasksDone = getTasksDone(groupInfo.taskLists);

  return (
    <div>
      {
        <main
          className={cn(
            "flex flex-col",
            "tablet:px-[24px] tablet:pt-[74px]",
            "mx-auto min-w-[360px] pc:w-[1120px] pc:pt-[120px]"
          )}
        >
          <section className="pc:flex pc:justify-center">
            <TeamBannerAdmin
              groupName={groupInfo.name}
              tasksTodo={tasksTodo}
              tasksDone={tasksDone}
              members={groupInfo.members}
              groupId={groupId}
              isAdmin={isAdmin}
              myId={userInfo.id}
            />
          </section>

          <section className="pc:mx-auto pc:w-full pc:max-w-[1120px]">
            <TeamBody taskLists={groupInfo.taskLists} groupId={groupId} />
          </section>

          <section className="mb-[290px] mt-[48px] px-[16px] tablet:mb-[230px] tablet:px-[0px] pc:mx-auto pc:mb-[67px] pc:w-full pc:max-w-[1120px]">
            <TeamMembersSection
              members={groupInfo.members}
              groupId={groupId}
              isAdmin={isAdmin}
              userId={userInfo?.id}
            />
          </section>
        </main>
      }
    </div>
  );
};

export default TeamPageClient;
