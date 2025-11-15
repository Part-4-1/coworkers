"use client";

import groupData from "@/mocks/group.json";
import TaskListContainer from "./_components/task-list-container";
import { ChangeEvent, useEffect, useState } from "react";
import TaskListDatePicker from "./_components/task-list-date-picker";
import { getCurrentSunday, getWeek } from "@/utils/date-util";

const Page = () => {
  const [taskListId, setTaskListId] = useState<number>();
  const [currentSunday, setCurrentSunday] = useState<Date | null>(null);
  const [week, setWeek] = useState<number[] | null>(null);
  const [day, setDay] = useState<string>("");

  const handleChangeDay = (e: ChangeEvent<HTMLInputElement>) => {
    setDay(e.target.value);
  };

  useEffect(() => {
    const date = new Date();
    const sunday = getCurrentSunday();
    setDay(date.getDate().toString());
    setCurrentSunday(sunday);
    setWeek(getWeek(sunday));
  }, []);

  return (
    <div className="flex w-full max-w-[1120px] flex-col tablet:px-[26px]">
      {/* <TeamBannerMember
        groupName={groupData.name}
        members={groupData.members}
        onSettingClick={() => {}}
      /> */}
      <TaskListContainer taskList={groupData.taskLists} />
      <div className="bg-white">
        <TaskListDatePicker
          name="진행 중인 일"
          {...{ currentSunday, week, day, handleChangeDay }}
        />
      </div>
    </div>
  );
};

export default Page;
