import { Button, Icon, LoadingSpinner } from "@/components/index";

interface UserSettingsActionsProps {
  isDirty: boolean;
  isImageUploading: boolean;
  onDeleteClick: () => void;
  onSaveClick: () => void;
  isSocialLogin?: boolean;
}

const UserSettingsActions = ({
  isDirty,
  isImageUploading,
  onDeleteClick,
  onSaveClick,
  isSocialLogin = false,
}: UserSettingsActionsProps) => {
  return (
    <div className="mt-[41.5px] flex w-full items-center justify-between tablet:mt-[42.5px] pc:mt-[30.5px]">
      {!isSocialLogin && (
        <Button
          variant="none"
          className="w-fit rounded-[40px] text-md font-medium text-red-400 tablet:text-lg"
          onClick={onDeleteClick}
        >
          <Icon icon="secession" className="h-6 w-6" />
          회원 탈퇴하기
        </Button>
      )}
      <Button
        variant="none"
        className={`w-fit rounded-[40px] text-md font-medium tablet:text-lg ${
          !isDirty || isImageUploading ? "text-gray-400" : "text-blue-200"
        } ${isSocialLogin ? "ml-auto" : ""}`}
        onClick={onSaveClick}
        disabled={!isDirty || isImageUploading}
      >
        {isImageUploading ? (
          <LoadingSpinner />
        ) : (
          <>
            <Icon icon="checkInverse" className="h-6 w-6" />
            변경사항 저장하기
          </>
        )}
      </Button>
    </div>
  );
};

export default UserSettingsActions;
