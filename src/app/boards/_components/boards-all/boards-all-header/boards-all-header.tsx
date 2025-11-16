"use client";

import { useMemo } from "react";
import { Dropdown } from "@/components/index";

interface BoardsAllHeaderProps {
  onOrderByChange: (order: string) => void;
  onPageReset: () => void;
}

const BoardsAllHeader = ({
  onOrderByChange,
  onPageReset,
}: BoardsAllHeaderProps) => {
  const items = useMemo(
    () => [
      {
        label: "최신순",
        onClick: () => {
          onOrderByChange("recent");
          onPageReset();
        },
      },
      {
        label: "좋아요 많은순",
        onClick: () => {
          onOrderByChange("like");
          onPageReset();
        },
      },
    ],
    [onPageReset, onOrderByChange]
  );

  return (
    <div className="mx-auto mt-[45px] flex w-full max-w-[340px] items-center justify-between tablet:max-w-[620px] pc:max-w-[1074px]">
      <h2 className="m-0 text-xl font-semibold">전체</h2>
      <Dropdown
        items={items}
        isWidthFull={true}
        defaultTriggerClassName="w-[130px] h-[48px]"
        textAlign={"start"}
      />
    </div>
  );
};

export default BoardsAllHeader;
