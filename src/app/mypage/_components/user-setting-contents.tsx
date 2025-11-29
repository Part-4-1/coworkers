"use client";

import { useState, useEffect } from "react";
import {
  DeleteUserModalUI,
  PatchPasswordModalUI,
  UserSettingsSkeleton,
} from "@/components/index";
import UserProfileSection from "./user-profile-section";
import UserAccountInfoSection from "./user-account-info-section";
import UserSettingsActions from "./user-settings-actions";
import usePrompt from "@/hooks/use-prompt";
import useUnsavedChangesGuard from "@/hooks/use-unsaved-changes-guard";
import useProfileImageManager from "@/hooks/use-profile-image-manager";
import useDeleteUser from "@/hooks/api/user/use-delete-user";
import usePatchUserPassword from "@/hooks/api/user/use-patch-user-password";
import usePatchUser from "@/hooks/api/user/use-patch-user";
import { useGetUserInfoQuery } from "@/hooks/api/user/use-get-user-info-query";
import isSocialLogin from "@/utils/auth-helper";
import { hasProfanity } from "@/utils/profanityFilter";
import useToast from "@/hooks/use-toast";

const UserSettingContents = () => {
  const toast = useToast();
  const {
    Modal: DeleteModal,
    openPrompt: openDeleteModal,
    closePrompt: closeDeleteModal,
  } = usePrompt();
  const {
    Modal: PasswordModal,
    openPrompt: openPasswordModal,
    closePrompt: closePasswordModal,
  } = usePrompt();

  const { mutate: deleteUser } = useDeleteUser();
  const { mutate: patchPassword } = usePatchUserPassword();
  const { mutate: patchUser } = usePatchUser();
  const { data: userInfo, isPending } = useGetUserInfoQuery();

  const [nickname, setNickname] = useState("");

  const {
    profileImage,
    setProfileImage,
    fileInputRef,
    handleImageClick,
    handleFileChange,
    handleRemoveImage,
    isUploading: isImageUploading,
  } = useProfileImageManager();

  useEffect(() => {
    if (userInfo) {
      setNickname(userInfo.nickname || "");
      setProfileImage(userInfo.image || "");
    }
  }, [userInfo, setProfileImage]);

  const isDirty =
    nickname !== (userInfo?.nickname || "") ||
    profileImage !== (userInfo?.image || "");

  const handleSaveChanges = () => {
    const updates: { nickname?: string; image?: string } = {};

    if (nickname !== (userInfo?.nickname || "")) {
      if (hasProfanity(nickname)) {
        toast.error("부적절한 닉네임입니다. 닉네임을 변경해주세요.");
        return;
      }
      updates.nickname = nickname;
    }

    if (profileImage !== (userInfo?.image || "")) {
      updates.image = profileImage;
    }

    if (Object.keys(updates).length === 0) {
      return;
    }

    patchUser(updates);
  };

  const { UnsavedChangesModal } = useUnsavedChangesGuard({
    isDirty,
    onSave: handleSaveChanges,
  });

  const isUserSocialLogin = isSocialLogin(userInfo?.email);

  if (isPending) {
    return <UserSettingsSkeleton />;
  }

  return (
    <>
      <div className="flex flex-col items-start gap-8 px-[21px] pb-[74.5px] pt-[52.5px] tablet:gap-10 tablet:px-[45px] tablet:pb-[64px] tablet:pt-[61px]">
        <h2 className="text-xl font-bold text-blue-700 tablet:text-2xl">
          계정 설정
        </h2>
        <div className="w-full gap-6 flex-col-center">
          <UserProfileSection
            profileImage={profileImage}
            nickname={nickname}
            fileInputRef={fileInputRef}
            handleImageClick={handleImageClick}
            handleFileChange={handleFileChange}
            handleRemoveImage={handleRemoveImage}
            onNicknameChange={setNickname}
          />
          <UserAccountInfoSection
            email={userInfo?.email || ""}
            onPasswordChangeClick={openPasswordModal}
            isSocialLogin={isUserSocialLogin}
          />
          <UserSettingsActions
            isDirty={isDirty}
            isImageUploading={isImageUploading}
            onDeleteClick={openDeleteModal}
            onSaveClick={handleSaveChanges}
            isSocialLogin={isUserSocialLogin}
          />
        </div>
        <DeleteModal>
          <DeleteUserModalUI
            contents={<>회원탈퇴를 진행하시겠어요?</>}
            description={
              <>
                그룹장으로 있는 그룹은 자동으로 삭제되고,
                <br />
                모든 그룹에서 나가집니다.
              </>
            }
            handleClose={closeDeleteModal}
            handleClick={() => {
              deleteUser();
              closeDeleteModal();
            }}
          />
        </DeleteModal>
        <PasswordModal>
          <PatchPasswordModalUI
            handleClose={closePasswordModal}
            handleClick={(password, passwordConfirmation) => {
              patchPassword({ password, passwordConfirmation });
              closePasswordModal();
            }}
          />
        </PasswordModal>
        <UnsavedChangesModal />
      </div>
    </>
  );
};

export default UserSettingContents;
