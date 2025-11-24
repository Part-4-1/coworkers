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
const Page = () => {
  const param = useParams();
  const query = useSearchParams().get("list");
  const groupId = Number(param.groupId);
  const taskListId = Number(query);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const { data: groupData, isPending } = useGetGroupInfo(groupId);
  const { data: taskItems, isPending: taskItemsPending } = useGetTaskItems(
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
            "flex h-[752px] flex-col gap-[37px] bg-white px-4 pb-[37px] pt-[38px]",
            "tablet:rounded-[20px] tablet:px-[30px] tablet:pt-[37px]",
            "w-full"
          )}
        >
          <TaskListDatePicker
            groupId={groupId}
            taskListId={taskListId}
            setSelectedDate={setSelectedDate}
          />
          {!taskItemsPending ? (
            <TaskListItem
              groupId={groupId}
              taskListId={taskListId}
              taskItems={taskItems}
            />
          ) : (
            "불러오는 중..."
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
