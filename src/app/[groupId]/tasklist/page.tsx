"use client";

import groupData from "@/mocks/group.json";
import TaskListContainer from "./_components/task-list-container";
import { useEffect, useState } from "react";
import TaskListDatePicker from "./_components/task-list-date-picker";
import TaskListItem from "./_components/task-list-item";
import taskList from "@/mocks/task-lists-data.json";
import cn from "@/utils/clsx";
import { TeamBannerMember } from "@/components";
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
    <div className="flex w-full max-w-[1120px] flex-col gap-6 tablet:gap-[34px] tablet:px-[26px] pc:gap-12">
      <TeamBannerMember
        groupName={groupData.name}
        members={groupData.members}
        onMemberListClick={() => {}}
        className="py-3 tablet:mt-[69px] tablet:py-4"
      />
      <div className="flex w-full flex-col gap-[22px] tablet:gap-7 pc:max-w-full pc:flex-row">
        <TaskListContainer taskList={groupData.taskLists} />
        <div
          className={cn(
            "flex h-[752px] flex-col gap-[37px] bg-white px-4 pb-[57px] pt-[38px]",
            "tablet:h-[938px] tablet:rounded-[20px] tablet:px-[30px] tablet:pb-[102px] tablet:pt-[46px]",
            "w-full pc:h-[970px]"
          )}
        >
          <TaskListDatePicker
            name="진행 중인 일"
            {...{ selectedDate, setSelectedDate }}
          />
          <TaskListItem taskItems={taskList.tasks} />
        </div>
      </div>
    </div>
  );
};

export default Page;
