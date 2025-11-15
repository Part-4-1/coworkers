"use client";

import groupData from "@/mocks/group.json";
import TaskListContainer from "./_components/task-list-container";
import { useState } from "react";
import TaskListDatePicker from "./_components/task-list-date-picker";

const Page = () => {
  const [taskListId, setTaskListId] = useState<number>();

  return (
    <div className="flex w-full max-w-[1120px] flex-col tablet:px-[26px]">
      {/* <TeamBannerMember
        groupName={groupData.name}
        members={groupData.members}
        onSettingClick={() => {}}
      /> */}
      <TaskListContainer taskList={groupData.taskLists} />
      <div className="bg-white">
        <TaskListDatePicker name="진행 중인 일" />
      </div>
    </div>
  );
};

export default Page;
