"use client";

import { TeamBannerMember } from "@/components";
import useGetGroupInfo from "@/hooks/api/group/use-get-group-info";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import HistoryDatePicker from "./_components/history-date-picker";

const Page = () => {
  const param = useParams();
  const groupId = Number(param.groupId);
  const { data: groupData, isPending } = useGetGroupInfo(groupId);

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    setSelectedDate(new Date());
  }, []);

  return (
    <div className="flex w-full max-w-[1120px] flex-col gap-4 tablet:gap-[34px] tablet:px-[26px] pc:gap-12">
      <TeamBannerMember
        groupName={groupData?.name || ""}
        members={groupData?.members || []}
        onMemberListClick={() => {}}
        className="py-3 tablet:mt-[69px] tablet:py-4"
      />
      <div className="mx-4 flex min-h-screen flex-col rounded-[20px] bg-white px-5 pb-[52px] pt-[33px]">
        <HistoryDatePicker selectedDate={selectedDate} />
      </div>
    </div>
  );
};

export default Page;
