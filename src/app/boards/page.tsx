"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button, Icon } from "@/components/index";
import BoardsHeader from "./_components/boards-header/boards-header";
import BoardsBest from "./_components/boards-best/boards-best";
import BoardsAll from "./_components/boards-all/boards-all";

const Page = () => {
  const [keyword, setKeyword] = useState("");
  const [debounceKeyword, setDebounceKeyword] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceKeyword(keyword);
    }, 500);
    return () => clearTimeout(timer);
  }, [keyword]);

  return (
    <div>
      <BoardsHeader onSearch={setKeyword} />
      <BoardsBest />
      <BoardsAll keyword={debounceKeyword} />
      <Link href="/boards/write">
        <Button className="fixed bottom-5 right-[20%] z-50 h-11 w-11 rounded-full tablet:bottom-9 tablet:right-[13%] tablet:h-14 tablet:w-14 pc:right-[6%]">
          <Icon icon="pencil" className="h-5 w-5 tablet:h-6 tablet:w-6" />
        </Button>
      </Link>
    </div>
  );
};

export default Page;
