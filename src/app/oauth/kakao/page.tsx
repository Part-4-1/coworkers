"use client";

import { Suspense } from "react";
import Redirect from "./redirect";

const Page = () => {
  return (
    <Suspense fallback={null}>
      <Redirect />
    </Suspense>
  );
};
export default Page;
