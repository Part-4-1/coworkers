import { TextInput, Button, Icon, ProfileEdit } from "@/components/index";

interface UserProfileSectionProps {
  profileImage: string;
  nickname: string;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  handleImageClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRemoveImage: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onNicknameChange: (nickname: string) => void;
}

const UserProfileSection = ({
  profileImage,
  nickname,
  fileInputRef,
  handleImageClick,
  handleFileChange,
  handleRemoveImage,
  onNicknameChange,
}: UserProfileSectionProps) => {
  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
      <div className="group relative">
        <ProfileEdit image={profileImage} onClick={handleImageClick} />
        {profileImage && (
          <Button
            variant="none"
            onClick={handleRemoveImage}
            className="absolute -right-2 -top-2 rounded-full border border-gray-400 bg-white p-1 opacity-0 transition-opacity hover:bg-gray-300 group-hover:opacity-100"
          >
            <Icon icon="x" className="h-4 w-4 text-gray-600" />
          </Button>
        )}
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
          onChange={(e) => onNicknameChange(e.target.value.replace(/\s/g, ""))}
        />
      </div>
    </>
  );
};

export default UserProfileSection;
