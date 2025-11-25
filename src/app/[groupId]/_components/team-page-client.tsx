"use client";

import { TeamBannerAdmin, TeamBannerMember } from "@/components/index";
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
  const { data: groupInfo } = useGetGroupInfo(groupId);

  if (!groupInfo) return null;
  const tasksTodo = getTasksTodo(groupInfo.taskLists);
  const tasksDone = getTasksDone(groupInfo.taskLists);
  const isAdmin = isUserAdmin(userInfo, groupId);

  return (
    <div>
      {
        <main
          className={cn(
            "flex flex-col",
            "tablet:px-[24px] tablet:pt-[74px]",
            "min-w-[330px] pc:w-[1120px] pc:pt-[120px]"
          )}
        >
          <section className="pc:flex pc:justify-center">
            {isAdmin ? (
              <TeamBannerAdmin
                groupName={groupInfo.name}
                tasksTodo={tasksTodo}
                tasksDone={tasksDone}
                members={groupInfo.members}
                groupId={groupId}
              />
            ) : (
              <TeamBannerMember
                groupId={groupId}
                groupName={groupInfo.name}
                members={groupInfo.members}
              />
            )}
          </section>

          <section className="pc:mx-auto pc:w-full pc:max-w-[1120px]">
            <TeamBody taskLists={groupInfo.taskLists} groupId={groupId} />
          </section>

          <section className="mb-[290px] mt-[48px] px-[16px] tablet:mb-[230px] tablet:px-[0px] pc:mx-auto pc:mb-[67px] pc:w-full pc:max-w-[1120px]">
            <TeamMembersSection
              members={groupInfo.members}
              groupId={groupId}
              isAdmin={isAdmin}
            />
          </section>
        </main>
      }
    </div>
  );
};

export default TeamPageClient;
