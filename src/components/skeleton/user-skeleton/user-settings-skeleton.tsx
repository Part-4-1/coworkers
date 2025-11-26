import Skeleton from "react-loading-skeleton";

const UserSettingsSkeleton = () => {
  return (
    <div className="flex flex-col items-start gap-8 px-[21px] pb-[74.5px] pt-[52.5px] tablet:gap-10 tablet:px-[45px] tablet:pb-[64px] tablet:pt-[61px]">
      <Skeleton height={28} width={89} borderRadius="8px" />

      <div className="w-full gap-6 flex-col-center">
        <Skeleton
          width={64}
          height={64}
          borderRadius="20px"
          className="tablet:!h-[100px] tablet:!w-[100px] tablet:!rounded-[32px]"
        />

        <div className="flex w-full flex-col items-start gap-3">
          <Skeleton height={19} width={28} borderRadius="8px" />
          <Skeleton
            height={49}
            containerClassName="w-full"
            borderRadius="12px"
          />
        </div>

        <div className="flex w-full flex-col items-start gap-3">
          <Skeleton height={19} width={42} borderRadius="8px" />
          <Skeleton
            height={49}
            containerClassName="w-full"
            borderRadius="12px"
          />
        </div>

        <div className="flex w-full flex-col items-start gap-3">
          <Skeleton height={19} width={56} borderRadius="8px" />
          <Skeleton
            height={49}
            containerClassName="w-full"
            borderRadius="12px"
          />
        </div>

        <div className="flex w-full items-center justify-between">
          <Skeleton height={24} width={115} borderRadius="8px" />
          <Skeleton height={24} width={143} borderRadius="8px" />
        </div>
      </div>
    </div>
  );
};

export default UserSettingsSkeleton;
