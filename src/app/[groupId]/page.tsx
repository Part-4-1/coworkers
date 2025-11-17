"use client";

import { TeamBannerAdmin, TeamBannerMember } from "@/components/index";
import { mockGroupData } from "@/mocks/group-data";
import { mockGroupTasksData } from "@/mocks/group-tasks";
import cn from "@/utils/clsx";
import TeamBody from "./_components/team-body/team-body";
import TeamNoGroup from "./_components/team-body/team-no-group";
import TeamMembersSection from "./_components/team-members-section/team-members-section";

const TeamPage = () => {
  const currentGroup = mockGroupData[0]; // TODO: 동적으로 수정
  const isAdmin = true; // TODO: 동적으로 수정
  const isNoGroup = false; // TODO: 동적으로 수정
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
                onMemberListClick={() => {}}
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
          <section className="mt-[48px] px-[16px] tablet:px-[0px] pc:mx-auto pc:w-full pc:max-w-[1120px]">
            <TeamMembersSection members={currentGroup.members} />
          </section>
        </main>
      )}
    </div>
  );
};

export default TeamPage;
