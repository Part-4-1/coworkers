"use client";

import {
  DeleteModalUI,
  Dropdown,
  Icon,
  MemberProfileModalUI,
  Profile,
} from "@/components/index";
import useDeleteGroupMember from "@/hooks/api/group/use-delete-group-member";
import useMediaQuery from "@/hooks/use-media-query";
import usePrompt from "@/hooks/use-prompt";
import useToast from "@/hooks/use-toast";
import { Member } from "@/types/members";

interface TeamMemberProps {
  member: Member;
  isThisMemberAdmin?: boolean;
  isAdmin: boolean;
  groupId: number;
  isThisMemberMe: boolean;
}

const TeamMember = ({
  member,
  isThisMemberAdmin,
  isAdmin,
  groupId,
  isThisMemberMe,
}: TeamMemberProps) => {
  const DELETE_MEMBER_MESSAGE = "내보내기";
  const isMobile = useMediaQuery("(max-width: 744px)");
  const {
    Modal: MemberProfileModal,
    openPrompt: openMemberProfileModal,
    closePrompt: closeMemberProfileModal,
  } = usePrompt(true);
  const { success, error, warning } = useToast();
  const { mutate: deleteGroupMember } = useDeleteGroupMember(groupId);

  const {
    Modal: DeleteMemberModal,
    openPrompt: openDeleteMemberModal,
    closePrompt: closeDeleteMemberModal,
  } = usePrompt();

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(member.userEmail);
      success("이메일이 클립보드에 복사되었습니다.");
      closeMemberProfileModal();
    } catch (err) {
      error("이메일 복사에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const handleDeleteMember = () => {
    deleteGroupMember(member.userId, {
      onSuccess: () => {
        success("멤버를 팀에서 내보냈어요.");
      },
      onError: () => {
        error("멤버 내보내기에 실패했어요. 잠시 후 다시 시도해주세요.");
      },
    });
    closeDeleteMemberModal();
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

          {isThisMemberAdmin && (
            <div className="ml-[4px] flex-shrink-0">
              <Icon icon="crown" className="h-[16px] w-[16px] text-blue-200" />
            </div>
          )}
          {isThisMemberMe && (
            <div className="ml-[4px] flex-shrink-0 pt-[1px] text-xs text-gray-400">
              (나)
            </div>
          )}
        </div>
        <div className="truncate text-xs text-blue-700">{member.userEmail}</div>
      </div>

      <div className="flex h-full pt-[2px] tablet:pt-[4px]">
        {isAdmin && !isThisMemberMe ? (
          <div className="ml-[8px]">
            <Dropdown
              trigger={
                <Icon
                  icon="kebab"
                  className="h-[20px] w-[20px] text-gray-400"
                />
              }
              items={[
                { label: "이메일 복사", onClick: openMemberProfileModal },
                {
                  label: DELETE_MEMBER_MESSAGE,
                  onClick: openDeleteMemberModal,
                },
              ]}
            />
          </div>
        ) : (
          <div onClick={openMemberProfileModal} className="ml-[8px]">
            <Icon
              icon="kebab"
              className="h-[20px] w-[20px] cursor-pointer text-gray-400"
            />
          </div>
        )}
      </div>

      <MemberProfileModal>
        <MemberProfileModalUI onClick={handleCopyEmail} member={member} />
      </MemberProfileModal>
      <DeleteMemberModal>
        <DeleteModalUI
          contents={
            <>
              '{member.userName}' 님을
              <br />
              <br />
              팀에서 내보내시겠어요?
            </>
          }
          handleClick={handleDeleteMember}
          handleClose={closeDeleteMemberModal}
          confirmMessage={DELETE_MEMBER_MESSAGE}
        />
      </DeleteMemberModal>
    </div>
  );
};

export default TeamMember;
