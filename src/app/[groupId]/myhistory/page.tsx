"use client";

import { TeamBannerMember } from "@/components";
import useGetGroupInfo from "@/hooks/api/group/use-get-group-info";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import HistoryDatePicker from "./_components/history-date-picker";
import HistoryTaskChipList from "./_components/history-task-chip-list";
import { TasksDone } from "@/types/task";
import useGetUserHistory from "@/hooks/api/user/use-get-user-history";
import { getDoneTaskList } from "@/utils/util";

const Page = () => {
  const param = useParams();
  const groupId = Number(param.groupId);

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [taskListId, setTaskListId] = useState<number>(0);
  const [doneTaskList, setDoneTaskList] = useState<TasksDone[]>([]);
  const [{ data: groupData }, { data: userHistory }] = useGetUserHistory(
    selectedDate?.toLocaleDateString("sv-SE") || "",
    groupId
  );

  useEffect(() => {
    setSelectedDate(new Date());
    console.log(
      getDoneTaskList(userHistory?.tasksDone, taskListId, selectedDate)
    );
    console.log(userHistory?.tasksDone);
  }, [userHistory]);

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
          <HistoryTaskChipList groupData={groupData} />
        </div>
      </div>
    </div>
  );
};

export default Page;
