"use client";

import { TeamBannerMember } from "@/components";
import useGetGroupInfo from "@/hooks/api/group/use-get-group-info";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import HistoryDatePicker from "./_components/history-date-picker";
import HistoryTaskChipList from "./_components/history-task-chip-list";
import { Task } from "@/types/task";
import useGetUserHistory from "@/hooks/api/user/use-get-user-history";
import { getDoneTaskList } from "@/utils/util";
import useGetTaskList from "@/hooks/api/task/use-get-task-list";

const Page = () => {
  const param = useParams();
  const groupId = Number(param.groupId);

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [taskListId, setTaskListId] = useState<number>(0);
  const [doneTaskList, setDoneTaskList] = useState<Task[] | null>(null);
  const [{ data: groupData }, { data: userHistory }] = useGetUserHistory(
    selectedDate?.toLocaleDateString("sv-SE") || "",
    groupId,
    taskListId
  );
  const { data: taskList } = useGetTaskList(groupId, taskListId);

  useEffect(() => {
    setSelectedDate(new Date());
  }, []);

  useEffect(() => {
    console.log(taskList);

    const doneList = getDoneTaskList(taskList, taskListId, selectedDate);
    // setDoneTaskList(doneList);
    console.log(doneList);
  }, [taskListId, selectedDate]);

  return (
    <div className="flex w-full max-w-[1120px] flex-col gap-4 tablet:gap-[34px] tablet:px-[26px] pc:gap-12">
      <TeamBannerMember
        groupName={groupData?.name || ""}
        members={groupData?.members || []}
        onMemberListClick={() => {}}
        className="py-3 tablet:mt-[69px] tablet:py-4"
      />
      <div className="mx-4 flex min-h-screen flex-col rounded-[20px] bg-white px-5 pb-[52px] pt-[33px]">
        <div className="flex flex-col gap-[27px]">
          <HistoryDatePicker
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
          <HistoryTaskChipList
            groupData={groupData}
            setTaskListId={setTaskListId}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
