"use client";

import { DatePicker } from "@/components";

const Page = () => {
  return (
    <div className="flex-col-center">
      리스트 페이지
      <DatePicker day="목" date={13} />
      <DatePicker day="금" date={14} />
    </div>
  );
};

export default Page;
