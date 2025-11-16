"use client";

import { TeamBannerAdmin, TeamBannerMember } from "@/components/index";
import useMediaQuery from "@/hooks/use-media-query";
import { mockGroupData } from "@/mocks/group-data";
import cn from "@/utils/clsx";
import TeamBodyMobileTablet from "./_components/team-body-mobile-tablet/team-body-mobile-tablet";
import TeamBodyPc from "./_components/team-body-pc/team-body-pc";
import TeamNoGroup from "./_components/team-no-group/team-no-group";

const TeamPage = () => {
  const currentGroup = mockGroupData[0]; // TODO: 동적으로 수정
  const isAdmin = true; // TODO: 동적으로 수정
  const isNoGroup = true; // TODO: 동적으로 수정
  const isPc = useMediaQuery("(min-width: 1280px)");
  const tasksTodo = currentGroup.taskLists.reduce(
    (sum, list) => sum + list.tasks.length,
    0
  );
  const tasksDone =
    currentGroup.taskLists.find((list) => list.displayIndex === 2)?.tasks
      .length ?? 0;

  return (
    <div>
      {isNoGroup ? (
        <TeamNoGroup />
      ) : (
        <main className="flex flex-col">
          <section className="tablet:mx-[26px] tablet:mt-[74px] pc:ml-[85px] pc:mt-[120px]">
            {isAdmin ? (
              <TeamBannerAdmin
                groupName={currentGroup.name}
                tasksTodo={tasksTodo}
                tasksDone={tasksDone}
                members={currentGroup.members}
                onMemberListClick={() => {}}
                showProfileListOnPc={false}
              />
            ) : (
              <TeamBannerMember
                groupName={currentGroup.name}
                members={currentGroup.members}
                showProfileListonPc={false}
              />
            )}
          </section>
          <section
            className={cn(
              "mt-[34px] px-[16px] pc:ml-[91px] pc:px-[0px]",
              "tablet:mt-[43px] tablet:px-[26px] pc:mt-[0px] pc:w-[1120px]"
            )}
          >
            {isPc ? (
              <TeamBodyPc members={currentGroup.members} />
            ) : (
              <TeamBodyMobileTablet />
            )}
          </section>
        </main>
      )}
    </div>
  );
};

export default TeamPage;
