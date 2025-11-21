import { Button } from "@/components";
import cn from "@/utils/clsx";

interface InviteMemberModalUIProps {
  onClick?: () => void;
}

const InviteMemberModalUI = ({ onClick }: InviteMemberModalUIProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-col px-[31.5px] pt-2 flex-center",
        "tablet:w-[384px]"
      )}
    >
      <div className="mb-[8px] text-lg font-medium text-blue-700">
        멤버 초대
      </div>
      <div className="mb-[24px] text-md font-medium text-gray-700 tablet:mb-[40px] tablet:text-blue-600">
        그룹에 참여할 수 있는 링크를 복사합니다.
      </div>
      <div className="w-full">
        <Button onClick={onClick}>링크 복사하기</Button>
      </div>
    </div>
  );
};

export default InviteMemberModalUI;
