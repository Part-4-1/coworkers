"use client";

import useGetUserHistory from "@/hooks/api/user/use-get-user-history";
import { getMonthlyTaskList } from "@/utils/util";
import HistoryList from "./_components/history-list";

const Page = () => {
  const { data: userHistory, isPending: userHistoryPending } =
    useGetUserHistory();

  return (
    <div className="mt-[100px] flex w-full max-w-[1120px] flex-col gap-4 tablet:gap-[34px] tablet:px-[26px] pc:gap-12">
      <div className="mx-4 flex min-h-screen flex-col rounded-[20px] bg-white px-5 pb-[52px] pt-[33px] tablet:mx-0 tablet:px-[30px] pc:px-[37px]">
        <div className="flex flex-col gap-[27px]">
          <p className="text-2lg font-bold">마이 히스토리</p>
          {!userHistoryPending ? (
            <HistoryList
              monthlyTaskList={getMonthlyTaskList(userHistory?.tasksDone)}
            />
          ) : (
            <p>로딩 중</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
