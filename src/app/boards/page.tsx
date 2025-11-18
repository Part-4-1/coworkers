"use client";

import { useEffect, useState } from "react";
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
    </div>
  );
};

export default Page;
