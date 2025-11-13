import cn from "@/utils/clsx";
import React, { ReactNode } from "react";

const SingUpInFormWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-[343px] rounded-[20px] bg-white tablet:w-[550px]",
        "px-[21px] py-[57px] tablet:px-[45px] tablet:py-[72px]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default SingUpInFormWrapper;
