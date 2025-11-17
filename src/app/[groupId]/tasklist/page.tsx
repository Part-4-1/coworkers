"use client";

import TaskListContainer from "./_components/task-list-container";
import { useEffect, useState } from "react";
import TaskListDatePicker from "./_components/task-list-date-picker";
import TaskListItem from "./_components/task-list-item";
import cn from "@/utils/clsx";
import { Button, Icon, TeamBannerMember } from "@/components";
import useGetGroupInfo from "@/hooks/api/group/use-get-group-info";
import useGetTaskItems from "@/hooks/api/task/use-get-task-items";
import { useSearchParams } from "next/navigation";
const Page = () => {
  const listId = useSearchParams().get("list");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const { data: groupData, isPending } = useGetGroupInfo(3290);
  const { data: taskItems } = useGetTaskItems(
    3290,
    Number(listId),
    selectedDate?.toLocaleDateString("sV-SE") || ""
  );

  useEffect(() => {
    setSelectedDate(new Date());
  }, []);

  useEffect(() => {
    console.log(taskItems);
    console.log(selectedDate?.toLocaleDateString("sV-SE"));
  }, [selectedDate]);

  return (
    <div className="flex w-full max-w-[1120px] flex-col gap-6 tablet:gap-[34px] tablet:px-[26px] pc:gap-12">
      {!isPending ? (
        <TeamBannerMember
          groupName={groupData?.name || ""}
          members={groupData?.members || []}
          onMemberListClick={() => {}}
          className="py-3 tablet:mt-[69px] tablet:py-4"
        />
      ) : (
        ""
      )}
      <div className="relative flex w-full flex-col gap-[22px] tablet:gap-7 pc:max-w-full pc:flex-row">
        {!isPending && groupData ? (
          <TaskListContainer taskList={groupData.taskLists} />
        ) : (
          "아직 할 일이 없습니다!"
        )}
        <div
          className={cn(
            "flex h-[752px] flex-col gap-[37px] bg-white px-4 pb-[57px] pt-[38px]",
            "tablet:h-[938px] tablet:rounded-[20px] tablet:px-[30px] tablet:pb-[102px] tablet:pt-[46px]",
            "w-full pc:h-[970px]"
          )}
        >
          <TaskListDatePicker setSelectedDate={setSelectedDate} />
          <TaskListItem taskItems={taskItems} />
        </div>
        <Button className="fixed bottom-10 right-[13%] h-14 w-14 rounded-full">
          <Icon icon="plus" className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default Page;
