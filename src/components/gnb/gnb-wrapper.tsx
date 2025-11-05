"use client";

import useMediaQuery from "@/hooks/useMediaQuery";
import React from "react";
import Sidebar from "./sidebar/sidebar";
import GnbHeader from "./header/gnb-header";

const TABLET_BREAKPOINT = "(min-width: 376px)";

const GnbWrapper = () => {
  const isTabletOrPc = useMediaQuery(TABLET_BREAKPOINT);

  if (isTabletOrPc) {
    return <Sidebar />;
  }

  return <GnbHeader />;
};

export default GnbWrapper;
