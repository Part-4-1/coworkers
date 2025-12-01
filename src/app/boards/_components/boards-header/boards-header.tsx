"use client";

import cn from "@/utils/clsx";
import { TextInput, Button, Icon } from "@/components/index";
import { useCallback, ChangeEvent } from "react";

const BoardsHeader = ({
  onSearch,
}: {
  onSearch: (keyword: string) => void;
}) => {
  const handleSearch = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onSearch(e.target.value);
    },
    [onSearch]
  );

  return (
    <div
      className={cn(
        "mx-auto mb-[30px] mt-[25px] flex w-full flex-col gap-4 px-4",
        "tablet:mt-[77px] tablet:max-w-[620px] tablet:flex-row tablet:items-center tablet:justify-between tablet:px-0",
        "pc:mt-[87px] pc:max-w-[1120px]"
      )}
    >
      <h1 className="whitespace-nowrap text-2xl font-semibold">자유게시판</h1>
      <TextInput
        containerClassName="w-full max-w-[343px] tablet:max-w-[420px]"
        className="rounded-full border-2"
        placeholder="검색어를 입력해주세요"
        id="search"
        onChange={handleSearch}
        leftIcon={
          <Button variant="none">
            <Icon icon="search" className="h-8 w-8"></Icon>
          </Button>
        }
      />
    </div>
  );
};

export default BoardsHeader;
