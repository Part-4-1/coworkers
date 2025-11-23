"use client";

import TaskListContainer from "./_components/task-list-container";
import { useEffect, useState } from "react";
import TaskListDatePicker from "./_components/task-list-date-picker";
import TaskListItem from "./_components/task-list-item";
import cn from "@/utils/clsx";
import { TeamBannerMember } from "@/components";
import useGetGroupInfo from "@/hooks/api/group/use-get-group-info";
import useGetTaskItems from "@/hooks/api/task/use-get-task-items";
import { useParams, useSearchParams } from "next/navigation";
import useGetTaskList from "@/hooks/api/task/use-get-task-list";
const Page = () => {
  const param = useParams();
  const query = useSearchParams().get("list");
  const groupId = Number(param.groupId);
  const taskListId = Number(query);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const { data: groupData, isPending } = useGetGroupInfo(groupId);

  const { data: taskItems } = useGetTaskItems(
    groupId,
    taskListId,
    selectedDate?.toLocaleDateString("sv-SE") || ""
  );

  useEffect(() => {
    setSelectedDate(new Date());
  }, []);

  return (
    //TODO: 관리자 배너 추가하기
    <div className="flex w-full max-w-[1120px] flex-col gap-6 tablet:gap-[34px] tablet:px-[26px] pc:gap-12">
      <TeamBannerMember
        groupName={groupData?.name || ""}
        members={groupData?.members || []}
        onMemberListClick={() => {}}
        className="py-3 tablet:mt-[69px] tablet:py-4"
      />
      <div className="relative flex w-full flex-col gap-[22px] tablet:gap-7 pc:max-w-full pc:flex-row">
        <TaskListContainer
          groupId={groupId}
          taskList={groupData?.taskLists || []}
        />
        <div
          className={cn(
            "flex h-[752px] flex-col gap-[37px] bg-white px-4 pb-[57px] pt-[38px]",
            "tablet:h-[938px] tablet:rounded-[20px] tablet:px-[30px] tablet:pb-[102px] tablet:pt-[46px]",
            "w-full pc:h-[970px]"
          )}
        >
          <TaskListDatePicker
            groupId={groupId}
            taskListId={taskListId}
            setSelectedDate={setSelectedDate}
          />
          <TaskListItem
            groupId={groupId}
            taskListId={taskListId}
            taskItems={taskItems}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
