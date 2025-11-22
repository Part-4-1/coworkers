"use client";

import { useState, useEffect, useRef } from "react";
import {
  TextInput,
  Button,
  Icon,
  ProfileEdit,
  DeleteUserModalUI,
  PatchPasswordModalUI,
} from "@/components/index";
import usePrompt from "@/hooks/use-prompt";
import useDeleteUser from "@/hooks/api/user/use-delete-user";
import usePatchUserPassword from "@/hooks/api/user/use-patch-user-password";
import usePatchUser from "@/hooks/api/user/use-patch-user";
import { useGetUserInfoQuery } from "@/hooks/api/user/use-get-user-info-query";
import { useImageUpload } from "@/hooks/image-upload/use-image-upload";

const UserSettingContents = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

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
  const { data: userInfo } = useGetUserInfoQuery();

  const [nickname, setNickname] = useState("");
  const [profileImage, setProfileImage] = useState("");

  const { handleFile, isLoading: isImageUploading } = useImageUpload({
    maxCount: 1,
    onImagesChange: (images) => {
      if (images[0]) {
        setProfileImage(images[0]);
      }
    },
  });

  useEffect(() => {
    if (userInfo) {
      setNickname(userInfo.nickname || "");
      setProfileImage(userInfo.image || "");
    }
  }, [userInfo]);

  const isDirty =
    (nickname !== (userInfo?.nickname || "") ||
      profileImage !== (userInfo?.image || "")) &&
    nickname.trim() !== "";

  const handleImageClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleSaveChanges = () => {
    if (!nickname.trim()) {
      return;
    }

    const updates: { nickname?: string; image?: string } = {};

    if (nickname !== (userInfo?.nickname || "")) {
      updates.nickname = nickname;
    }

    if (profileImage !== (userInfo?.image || "")) {
      updates.image = profileImage;
    }

    patchUser(updates);
  };

  return (
    <div className="flex flex-col items-start gap-8 px-[21px] pb-[74.5px] pt-[52.5px] tablet:gap-10 tablet:px-[45px] tablet:pb-[64px] tablet:pt-[61px]">
      <h2 className="text-xl font-bold text-blue-700 tablet:text-2xl">
        계정 설정
      </h2>
      <div className="w-full gap-6 flex-col-center">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
        <div className="group relative">
          <ProfileEdit image={profileImage} onClick={handleImageClick} />
        </div>
        <div className="flex w-full flex-col items-start gap-3">
          <label
            htmlFor="name"
            className="text-md font-medium text-blue-700 tablet:text-lg"
          >
            이름
          </label>
          <TextInput
            id="name"
            type="name"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
        <div className="flex w-full flex-col items-start gap-3">
          <label
            htmlFor="email"
            className="text-md font-medium text-blue-700 tablet:text-lg"
          >
            이메일
          </label>
          <TextInput
            id="email"
            type="email"
            value={userInfo?.email || ""}
            readOnly
          />
        </div>
        <div className="flex w-full flex-col items-start gap-3">
          <label
            htmlFor="password"
            className="text-md font-medium text-blue-700 tablet:text-lg"
          >
            비밀번호
          </label>
          <TextInput
            id="password"
            type="password"
            value="********"
            readOnly
            rightIcon={
              <Button size="sm" onClick={openPasswordModal}>
                변경하기
              </Button>
            }
          />
        </div>
        <div className="mt-[41.5px] flex w-full items-center justify-between tablet:mt-[42.5px] pc:mt-[30.5px]">
          <Button
            variant="none"
            className="w-fit rounded-[40px] text-md font-medium text-red-400 tablet:text-lg"
            onClick={openDeleteModal}
          >
            <Icon icon="secession" className="h-6 w-6" />
            회원 탈퇴하기
          </Button>
          <Button
            variant="none"
            className={`w-fit rounded-[40px] text-md font-medium tablet:text-lg ${
              !isDirty || isImageUploading ? "text-gray-400" : "text-blue-200"
            }`}
            onClick={handleSaveChanges}
            disabled={!isDirty || isImageUploading}
          >
            <Icon icon="checkInverse" className="h-6 w-6" />
            {isImageUploading ? "이미지 업로드 중..." : "변경사항 저장하기"}
          </Button>
        </div>
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
    </div>
  );
};

export default UserSettingContents;
