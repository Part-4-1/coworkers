"use client";

import groupData from "@/mocks/group.json";
import TaskListContainer from "./_components/task-list-container";
import { useEffect, useState } from "react";
import TaskListDatePicker from "./_components/task-list-date-picker";
const Page = () => {
  const [taskListId, setTaskListId] = useState<number>();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    setSelectedDate(new Date());
  }, []);

  useEffect(() => {
    console.log(selectedDate);
  }, [selectedDate]);

  return (
    <div className="flex w-full max-w-[1120px] flex-col tablet:px-[26px]">
      {/* <TeamBannerMember
        groupName={groupData.name}
        members={groupData.members}
        onSettingClick={() => {}}
      /> */}
      <TaskListContainer taskList={groupData.taskLists} />
      <div className="flex flex-col bg-white px-4 pt-[38px] tablet:rounded-[20px] tablet:px-[30px] tablet:pt-[46px] pc:px-[42px]">
        <TaskListDatePicker
          name="진행 중인 일"
          {...{ selectedDate, setSelectedDate }}
        />
      </div>
    </div>
  );
};

export default Page;
