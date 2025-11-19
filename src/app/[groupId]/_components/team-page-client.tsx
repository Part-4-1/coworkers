// src/app/[groupId]/_components/team-page-client.tsx
"use client";

import { TeamBannerAdmin, TeamBannerMember } from "@/components/index";
import { useGetUserInfoQuery } from "@/hooks/api/user/use-get-user-info-query";
import { mockGroupData } from "@/mocks/group-data";
import { mockGroupTasksData } from "@/mocks/group-tasks";
import cn from "@/utils/clsx";
import TeamBody from "./team-body/team-body";
import TeamNoGroup from "./team-body/team-no-group";
import TeamMembersSection from "./team-members-section/team-members-section";

interface TeamPageClientProps {
  groupId: string;
}

const TeamPageClient = ({ groupId }: TeamPageClientProps) => {
  const { data: userInfo } = useGetUserInfoQuery();
  console.log("userInfo:", userInfo);
  const currentGroup = mockGroupData[0]; // TODO: 실제 API 연동 시 교체
  const isAdmin = true; // TODO: 실제 권한 로직으로 교체
  const isNoGroup = false; // TODO: 그룹 없을 때 조건 넣기
  const currentTasksGroup = mockGroupTasksData[0];

  const tasksTodo = currentTasksGroup.taskLists.reduce(
    (sum: number, list: any) => sum + list.tasks.length,
    0
  );

  const tasksDone = currentTasksGroup.taskLists.reduce(
    (sum: number, list: any) => {
      const doneCount = list.tasks.filter(
        (task: any) => task.doneAt !== null
      ).length;
      return sum + doneCount;
    },
    0
  );

  return (
    <div>
      {isNoGroup ? (
        <TeamNoGroup />
      ) : (
        <main
          className={cn(
            "flex flex-col",
            "tablet:px-[24px] tablet:pt-[74px]",
            "min-w-[270px] pc:pt-[120px]"
          )}
        >
          <section className="pc:flex pc:justify-center">
            {isAdmin ? (
              <TeamBannerAdmin
                groupName={currentGroup.name}
                tasksTodo={tasksTodo}
                tasksDone={tasksDone}
                members={currentGroup.members}
                groupId={groupId}
              />
            ) : (
              <TeamBannerMember
                groupName={currentGroup.name}
                members={currentGroup.members}
              />
            )}
          </section>

          <section className="pc:mx-auto pc:w-full pc:max-w-[1120px]">
            <TeamBody taskLists={currentTasksGroup.taskLists} />
          </section>

          <section className="mb-[290px] mt-[48px] px-[16px] tablet:mb-[230px] tablet:px-[0px] pc:mx-auto pc:mb-[67px] pc:w-full pc:max-w-[1120px]">
            <TeamMembersSection members={currentGroup.members} />
          </section>
        </main>
      )}
    </div>
  );
};

export default TeamPageClient;
