import { Button, Profile } from "@/components";
import { Member } from "@/types/members";
import cn from "@/utils/clsx";

interface MemberProfileModalProps {
  onClick?: () => void;
  member: Member;
}

const MemberProfileModal = ({ onClick, member }: MemberProfileModalProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-col px-[31.5px] pt-2 flex-center",
        "tablet:w-[384px]"
      )}
    >
      <div className="mb-[24px]">
        <Profile isMobileCircle={false} image={member.userImage} />
      </div>
      <div className="mb-[8px] text-md font-medium text-blue-700 tablet:text-lg">
        {member.userName}
      </div>
      <div className="mb-[24px] text-xs text-gray-700 tablet:text-md">
        {member.userEmail}
      </div>
      <div className="w-full">
        <Button onClick={onClick}>이메일 복사하기</Button>
      </div>
    </div>
  );
};

export default MemberProfileModal;
