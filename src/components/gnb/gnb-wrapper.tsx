"use client";

import useMediaQuery from "@/hooks/use-media-query";
import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar/sidebar";
import GnbHeader from "./header/gnb-header";

/**
 * @author leohan
 * @description 뷰포트 크기에 따라 사이드바(Sidebar) 또는 상단 헤더(GnbHeader) 중 하나를 동적으로 렌더링하는 Wrapper 컴포넌트입니다.
 * */

const TABLET_BREAKPOINT = "(min-width: 744px)";

const GnbWrapper = () => {
  const [isMounted, setIsMounted] = useState(false);
  const isTabletOrPc = useMediaQuery(TABLET_BREAKPOINT);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  if (isTabletOrPc) {
    return <Sidebar />;
  } else {
    return <GnbHeader />;
  }
};

export default GnbWrapper;
