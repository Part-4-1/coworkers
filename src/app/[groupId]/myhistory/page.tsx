"use client";

import { TeamBannerMember } from "@/components";
import useGetGroupInfo from "@/hooks/api/group/use-get-group-info";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import useGetUserHistory from "@/hooks/api/user/use-get-user-history";
import { getMonthlyTaskList } from "@/utils/util";
import { MonthlyTaskList } from "@/types/task";
import HistoryList from "./_components/history-list";

const Page = () => {
  const param = useParams();
  const groupId = Number(param.groupId);

  const [monthlyTaskList, setMonthlyTaskList] = useState<MonthlyTaskList[]>([]);
  const { data: groupData, isPending: groupPending } = useGetGroupInfo(groupId);
  const { data: userHistory, isPending: userHistoryPending } =
    useGetUserHistory(groupId);

  useEffect(() => {
    if (!userHistoryPending) {
      setMonthlyTaskList(getMonthlyTaskList(userHistory?.tasksDone));
    }
  }, [userHistoryPending]);

  return (
    <div className="flex w-full max-w-[1120px] flex-col gap-4 tablet:gap-[34px] tablet:px-[26px] pc:gap-12">
      <TeamBannerMember
        groupName={groupData?.name || ""}
        members={groupData?.members || []}
        onMemberListClick={() => {}}
        className="py-3 tablet:mt-[69px] tablet:py-4"
      />
      <div className="mx-4 flex min-h-screen flex-col rounded-[20px] bg-white px-5 pb-[52px] pt-[33px] tablet:mx-0 tablet:px-[30px] pc:px-[37px]">
        <div className="flex flex-col gap-[27px]">
          <p className="text-2lg font-bold">마이 히스토리</p>
          {!userHistoryPending ? (
            <HistoryList monthlyTaskList={monthlyTaskList} />
          ) : (
            <p>로딩 중</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
