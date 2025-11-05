"use client";

import useMediaQuery from "@/hooks/useMediaQuery";
import React from "react";
import Sidebar from "./sidebar/sidebar";
import GnbHeader from "./header/gnb-header";

/**
 * @author leohan
 * @description 뷰포트 크기에 따라 사이드바(Sidebar) 또는 상단 헤더(GnbHeader) 중 하나를 동적으로 렌더링하는 Wrapper 컴포넌트입니다.
 * */

const TABLET_BREAKPOINT = "(min-width: 376px)";

const GnbWrapper = () => {
  const isTabletOrPc = useMediaQuery(TABLET_BREAKPOINT);

  if (isTabletOrPc) {
    return <Sidebar />;
  }

  return <GnbHeader />;
};

export default GnbWrapper;
