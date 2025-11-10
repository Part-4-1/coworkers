import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="bg-gray-50">
      <div className="min-h-screen px-4 tablet:pl-[133px] tablet:pr-[61px]">
        {children}
      </div>
    </main>
  );
};

export default layout;
