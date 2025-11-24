"use client";

import { Icon, MemberProfileModalUI, Profile } from "@/components/index";
import useMediaQuery from "@/hooks/use-media-query";
import usePrompt from "@/hooks/use-prompt";
import useToast from "@/hooks/use-toast";
import { Member } from "@/types/members";

interface TeamMemberProps {
  member: Member;
  isAdmin?: boolean;
}

const TeamMember = ({ member, isAdmin }: TeamMemberProps) => {
  const isMobile = useMediaQuery("(max-width: 744px)");
  const { Modal, openPrompt, closePrompt } = usePrompt(true);
  const { success, error, warning } = useToast();

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(member.userEmail);
      success("이메일이 클립보드에 복사되었습니다.");
    } catch (err) {
      error("이메일 복사에 실패했습니다. 다시 시도해주세요.");
    } finally {
      closePrompt();
    }
  };

  return (
    <div className="flex h-[68px] items-center justify-between rounded-[16px] bg-white py-[12px] pl-[16px] pr-[19px] tablet:h-[73px]">
      <div className="flex min-w-0 flex-col gap-[6px] truncate">
        <div className="flex items-center">
          <div className="mr-[8px] flex-shrink-0">
            <Profile
              size={isMobile ? "sm" : "md"}
              image={member.userImage}
              isMobileCircle={false}
            />
          </div>
          <div className="truncate text-md font-medium text-blue-700">
            {member.userName}
          </div>
          {isAdmin && (
            <div className="ml-[4px] flex-shrink-0">
              <Icon icon="crown" className="h-[16px] w-[16px] text-blue-200" />
            </div>
          )}
        </div>
        <div className="truncate text-xs text-blue-700">{member.userEmail}</div>
      </div>

      <div onClick={openPrompt} className="ml-[4px]">
        <Icon
          icon="kebab"
          className="h-[20px] w-[20px] cursor-pointer text-gray-400"
        />
      </div>
      <Modal>
        <MemberProfileModalUI onClick={handleCopyEmail} member={member} />
      </Modal>
    </div>
  );
};

export default TeamMember;
