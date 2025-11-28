"use client";

import useGetUserHistory from "@/hooks/api/user/use-get-user-history";
import { getMonthlyTaskList } from "@/utils/util";
import HistoryList from "./_components/history-list";
import { HistorySkeleton } from "@/components";

const Page = () => {
  const { data: userHistory, isPending: userHistoryPending } =
    useGetUserHistory();

  if (userHistoryPending) return <HistorySkeleton />;

  return (
    <div className="flex h-full w-full max-w-[1120px] flex-col gap-4 py-[50px] tablet:gap-[34px] tablet:px-[26px] pc:gap-12">
      <div className="mx-4 flex flex-1 flex-col overflow-hidden rounded-[20px] bg-white px-5 pb-[52px] pt-[33px] tablet:mx-0 tablet:px-[30px] pc:px-[37px]">
        <div className="flex h-full flex-col gap-[27px] overflow-hidden">
          <p className="text-2lg font-bold">마이 히스토리</p>
          <HistoryList
            monthlyTaskList={getMonthlyTaskList(userHistory?.tasksDone)}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
