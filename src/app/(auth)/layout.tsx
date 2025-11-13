import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="min-h-screen px-4 tablet:pl-[133px] tablet:pr-[61px]">
      {children}
    </main>
  );
};

export default layout;
