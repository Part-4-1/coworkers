"use client";

import { TeamBannerAdmin } from "@/components/index";
import { mockGroupData } from "@/mocks/group-data";

const TeamPage = () => {
  const currentGroup = mockGroupData[0];
  const isAdmin = true;
  const tasksTodo = currentGroup.taskLists.reduce(
    (sum, list) => sum + list.tasks.length,
    0
  );
  const tasksDone =
    currentGroup.taskLists.find((list) => list.displayIndex === 2)?.tasks
      .length ?? 0;

  return (
    <main className="flex flex-col">
      <div>
        {isAdmin ? (
          <TeamBannerAdmin
            groupName={currentGroup.name}
            tasksTodo={tasksTodo}
            tasksDone={tasksDone}
            members={currentGroup.members}
            onMemberListClick={() => {}}
            onSettingClick={() => {}}
          />
        ) : (
          ""
        )}
      </div>
      <div></div>
    </main>
  );
};

export default TeamPage;
