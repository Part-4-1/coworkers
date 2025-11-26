"use client";

import Dropdown from "@/components/dropdown-components/dropdown";
import Icon from "@/components/icon/Icon";
import DeleteModalUI from "@/components/modal-ui/delete-modal-ui";
import useDeleteGroup from "@/hooks/api/group/use-delete-group";
import useDeleteGroupMember from "@/hooks/api/group/use-delete-group-member";
import { useGetUserInfoQuery } from "@/hooks/api/user/use-get-user-info-query";
import useMediaQuery from "@/hooks/use-media-query";
import usePrompt from "@/hooks/use-prompt";
import useToast from "@/hooks/use-toast";
import { Member } from "@/types/members";
import cn from "@/utils/clsx";
import { useRouter } from "next/navigation";
import TeamBannerAdminBody from "./team-banner-admin-body";
import TeamBannerAdminHeader from "./team-banner-admin-header";

/**
 * @author jinhyuk
 * @description
 * 팀 관리자용 배너 컴포넌트입니다.
 * @param groupName - 팀(그룹) 이름
 * @param tasksTodo - 총 task의 수
 * @param tasksDone - 완료한 task의 수
 * @param members - 팀 멤버 목록
 * @param onMemberListClick - 멤버 리스트 클릭 시 실행되는 핸들러
 * @param onSettingClick - 설정 아이콘 클릭 시 실행되는 핸들러
 * @param className - 추가 스타일을 위해 사용
 * @param showProfileListonPc - PC 화면에서 ProfileList를 표시할지 여부를 결정합니다.
 *
 */

interface TeamBannerAdminProps {
  groupName?: string;
  tasksTodo: number;
  tasksDone: number;
  members: Member[];
  showProfileListOnPc?: boolean;
  className?: string;
  groupId: number;
  isAdmin: boolean;
  myId: number;
}

const TeamBannerAdmin = ({
  groupName,
  tasksTodo,
  tasksDone,
  members,
  showProfileListOnPc = true,
  className,
  groupId,
  isAdmin,
  myId,
}: TeamBannerAdminProps) => {
  const isPc = useMediaQuery("(min-width: 1280px)");
  const router = useRouter();

  const {
    Modal: DeleteTeamModal,
    openPrompt: openDeleteTeamModal,
    closePrompt: closeDeleteTeamModal,
  } = usePrompt(false);

  const {
    Modal: LeaveTeamModal,
    openPrompt: openLeaveTeamModal,
    closePrompt: closeLeaveTeamModal,
  } = usePrompt();

  const { mutate: deleteGroup, isPending: isDeletePeding } =
    useDeleteGroup(groupId);

  const { mutate: deleteGroupMember, isPending: isDeleteGroupMemberPending } =
    useDeleteGroupMember(groupId);

  const { refetch: refetchUserInfo } = useGetUserInfoQuery();
  const { success, error, warning } = useToast();

  const handleEditDropdown = () => {
    router.push(`/${groupId}/editteam`);
  };

  const handleDeleteDropdown = () => {
    openDeleteTeamModal();
  };

  const handleConfirmDelete = () => {
    deleteGroup(groupId, {
      onSuccess: async () => {
        success("팀 삭제에 성공했습니다.");
        const { data: newUserInfo } = await refetchUserInfo();
        const newGroups = newUserInfo?.memberships ?? [];
        if (newGroups.length === 0) {
          await router.push("/boards");
          closeDeleteTeamModal();
          return;
        }

        await router.push(`/${newGroups[0].groupId}`);
        closeDeleteTeamModal();
      },
      onError: () => {
        error("팀 삭제에 실패했습니다.");
      },
    });
  };

  const handleLeaveTeam = () => {
    deleteGroupMember(myId, {
      onSuccess: async () => {
        success("팀을 나갔습니다.");
        const { data: newUserInfo } = await refetchUserInfo();
        const newGroups = newUserInfo?.memberships ?? [];
        if (newGroups.length === 0) {
          await router.push("/boards");
          closeLeaveTeamModal();
          return;
        }

        await router.push(`/${newGroups[0].groupId}`);
        closeLeaveTeamModal();
      },
    });
  };

  const adminItems = [
    { label: "수정하기", onClick: handleEditDropdown },
    { label: "삭제하기", onClick: handleDeleteDropdown },
  ];

  const memberItems = [{ label: "팀 나가기", onClick: openLeaveTeamModal }];

  return (
    <div
      className={cn(
        "relative flex min-w-[270px] flex-col justify-between bg-white shadow-xl",
        "h-[196px] w-full justify-between pb-[30px] pl-[25px] pr-[28px] pt-[20px] tablet:rounded-[20px]",
        "tablet:h-[239px] tablet:pb-[34px] tablet:pt-[30px] pc:pr-[36px] pc:pt-[32px]",
        className
      )}
    >
      <div className="relative pr-[48px] tablet:pr-[56px]">
        {!isPc && (
          <div className="absolute right-[12px] top-[4px] tablet:right-[14px]">
            {
              <Dropdown
                trigger={
                  <Icon
                    icon="setting"
                    className="h-[20px] w-[20px] cursor-pointer tablet:h-[24px] tablet:w-[24px]"
                  />
                }
                items={isAdmin ? adminItems : memberItems}
                menuAlign="end"
              />
            }
          </div>
        )}

        <TeamBannerAdminHeader
          groupName={groupName}
          members={members}
          showProfileListonPc={showProfileListOnPc}
          groupId={groupId}
        />
      </div>
      <div
        className={cn(
          "flex h-[84px] w-full justify-center gap-[22px]",
          "tablet:h-[108px]"
        )}
      >
        <TeamBannerAdminBody tasksTodo={tasksTodo} tasksDone={tasksDone} />

        <div className="flex items-end">
          {isPc && (
            <Dropdown
              trigger={
                <Icon
                  icon="setting"
                  className="h-[24px] w-[24px] cursor-pointer"
                />
              }
              items={isAdmin ? adminItems : memberItems}
              menuAlign="end"
            />
          )}
        </div>
      </div>
      <DeleteTeamModal>
        <DeleteModalUI
          handleClick={handleConfirmDelete}
          handleClose={closeDeleteTeamModal}
          contents={
            <>
              '{groupName}'
              <br />
              팀을 정말 삭제하시겠어요?
            </>
          }
          description="삭제 후에는 되돌릴 수 없습니다."
          isPeding={isDeletePeding}
        />
      </DeleteTeamModal>
      <LeaveTeamModal>
        <DeleteModalUI
          contents={
            <>
              '{groupName}'
              <br />
              <br />
              팀에서 나가시겠어요?
            </>
          }
          description="언제든 다시 참여하실 수 있어요"
          handleClick={handleLeaveTeam}
          handleClose={closeLeaveTeamModal}
          confirmMessage="나가기"
          isPeding={isDeleteGroupMemberPending}
        />
      </LeaveTeamModal>
    </div>
  );
};

export default TeamBannerAdmin;
