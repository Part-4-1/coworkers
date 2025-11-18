"use client";

import { Icon, Profile } from "@/components";
import useMediaQuery from "@/hooks/use-media-query";
import usePrompt from "@/hooks/use-prompt";
import { Member } from "@/types/members";
import MemberProfileModal from "./member-profile-modal";

interface TeamMemberProps {
  member: Member;
}

const TeamMember = ({ member }: TeamMemberProps) => {
  const isMobile = useMediaQuery("(max-width: 744px)");
  const { Modal, openPrompt, closePrompt } = usePrompt(true);

  const handleCopyEmail = () => {
    closePrompt();
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
        </div>
        <div className="truncate text-xs text-blue-700">{member.userEmail}</div>
      </div>

      <div onClick={openPrompt}>
        <Icon
          icon="kebab"
          className="h-[20px] w-[20px] cursor-pointer text-gray-400"
        />
      </div>
      <Modal>
        <MemberProfileModal onClick={handleCopyEmail} member={member} />
      </Modal>
    </div>
  );
};

export default TeamMember;
