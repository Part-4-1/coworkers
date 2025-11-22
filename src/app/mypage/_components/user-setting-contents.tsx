"use client";

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

const UserSettingContents = () => {
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

  return (
    <div className="flex flex-col items-start gap-8 px-[21px] pb-[74.5px] pt-[52.5px] tablet:gap-10 tablet:px-[45px] tablet:pb-[64px] tablet:pt-[61px]">
      <h2 className="text-xl font-bold text-blue-700 tablet:text-2xl">
        계정 설정
      </h2>
      <div className="w-full gap-6 flex-col-center">
        <div className="group relative">
          <ProfileEdit />
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
            value="example"
            onChange={() => {}}
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
            value="example@email.com"
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
            className="w-fit rounded-[40px] text-md font-medium text-blue-200 tablet:text-lg"
          >
            <Icon icon="checkInverse" className="h-6 w-6" />
            변경사항 저장하기
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
          handleClick={() => {
            closePasswordModal();
          }}
        />
      </PasswordModal>
    </div>
  );
};

export default UserSettingContents;
