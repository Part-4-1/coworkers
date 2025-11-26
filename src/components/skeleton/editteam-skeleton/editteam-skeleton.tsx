import cn from "@/utils/clsx";
import Skeleton from "react-loading-skeleton";

const EditTeamSkeleton = () => {
  return (
    <main className="h-screen w-full flex-center">
      <div
        className={cn(
          "flex h-[464px] w-[343px] flex-col items-center bg-white px-[21px] pb-[74px] pt-[52px]",
          "tablet:h-[543px] tablet:w-[550px] tablet:px-[45px] tablet:pb-[64px] tablet:pt-[61px]",
          "rounded-[20px]"
        )}
      >
        <div className="mb-[32px] w-full items-start">
          <Skeleton className="h-[28px] tablet:h-[32px]" />
        </div>

        <div className="mb-[12px] w-[77px] tablet:mb-[24px] tablet:w-[112px]">
          <Skeleton className="h-[78px] tablet:h-[116px]" />
        </div>

        <div className="mb-[40px] w-full">
          <Skeleton className="h-[48px]" />
        </div>

        <div className="mb-[20px] w-full tablet:mb-[24px]">
          <Skeleton className="h-[48px]" />
        </div>
      </div>
    </main>
  );
};

export default EditTeamSkeleton;
