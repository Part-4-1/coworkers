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
        <Button className="fixed bottom-10 right-[13%] z-50 h-14 w-14 rounded-full">
          <Icon icon="pencil" className="h-6 w-6" />
        </Button>
      </Link>
    </div>
  );
};

export default Page;
