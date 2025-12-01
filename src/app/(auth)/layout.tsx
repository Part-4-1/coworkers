import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen px-2 py-[33px] tablet:px-[61px] tablet:py-[120px]">
      {children}
    </div>
  );
};

export default layout;
