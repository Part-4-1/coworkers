"use client";

import groupData from "@/mocks/group.json";
import TaskListContainer from "./_components/task-list-container";

const Page = () => {
  return (
    <div className="flex w-full max-w-[1120px] tablet:px-[26px]">
      {/* <TeamBannerMember
        groupName={groupData.name}
        members={groupData.members}
        onSettingClick={() => {}}
      /> */}
      <TaskListContainer taskList={groupData.taskLists} />
    </div>
  );
};

export default Page;
