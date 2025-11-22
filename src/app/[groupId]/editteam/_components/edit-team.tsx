"use client";

import { Button, Icon, ProfileEdit, TextInput } from "@/components";
import useGetGroupInfo from "@/hooks/api/group/use-get-group-info";
import usePatchGroup from "@/hooks/api/group/use-patch-group";
import { useImageUpload } from "@/hooks/image-upload/use-image-upload";
import cn from "@/utils/clsx";
import { useEffect, useRef, useState } from "react";

interface EditTeamProps {
  groupId: number;
}

const EditTeam = ({ groupId }: EditTeamProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { data: groupInfo } = useGetGroupInfo(groupId);

  const [groupName, setGroupName] = useState("");
  const [initialImage, setInitialImage] = useState<string | null>();

  const {
    previews,
    handleFile,
    removeImage,
    isLoading: isImageUploading,
  } = useImageUpload({
    maxCount: 2,
    initialImages: groupInfo?.image ? [groupInfo.image] : undefined,
  });

  useEffect(() => {
    if (groupInfo) {
      setGroupName(groupInfo.name);
      setInitialImage(groupInfo.image);
    }
  }, [groupInfo]);

  const { mutate: patchGroup, isPending } = usePatchGroup(groupId);

  const handleImageClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (previews[0]) {
      removeImage(previews[0].id);
    }

    handleFile(file);
  };

  const onSubmit = () => {
    patchGroup({
      name: groupName,
      image: previews[0]?.url ?? initialImage ?? null,
    });
  };
  if (!groupInfo) return null;
  const handleRemoveImage = () => {
    if (previews[0]) {
      removeImage(previews[0].id);
    }
    setInitialImage(null);
  };

  return (
    <main className="h-screen w-full flex-center">
      <div
        className={cn(
          "flex h-[464px] w-[343px] flex-col items-center bg-white px-[21px] pb-[74px] pt-[52px]",
          "tablet:h-[543px] tablet:w-[550px] tablet:px-[45px] tablet:pb-[64px] tablet:pt-[61px]",
          "rounded-[20px]"
        )}
      >
        <div className="mb-[32px] w-full items-start">
          <h1
            className={cn("text-xl font-bold text-blue-700", "tablet:text-2xl")}
          >
            팀 수정하기
          </h1>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
        <div className="mb-[12px] tablet:mb-[24px]">
          <div className="group relative">
            <ProfileEdit
              image={previews[0]?.url ?? initialImage}
              onClick={handleImageClick}
            />
            {previews[0] || initialImage ? (
              <Button
                variant="none"
                onClick={handleRemoveImage}
                className="absolute -right-2 -top-2 rounded-full border border-gray-400 bg-white p-1 opacity-0 transition-opacity hover:bg-gray-300 group-hover:opacity-100"
              >
                <Icon icon="x" className="h-4 w-4 text-gray-600" />
              </Button>
            ) : (
              ""
            )}
          </div>
        </div>
        <h2 className="mb-[8px] w-full items-start text-md font-medium text-blue-700 tablet:mb-[12px] tablet:text-lg">
          팀 이름
        </h2>
        <div className="mb-[40px] w-full">
          <TextInput
            id={String(groupId)}
            className="border-gray-300 text-md text-blue-700 tablet:text-lg"
            value={groupName}
            spellCheck={false}
            onChange={(e) => setGroupName(e.target.value)}
            placeholder="팀 이름을 입력해주세요."
          />
        </div>
        <div className="mb-[20px] w-full tablet:mb-[24px]">
          <Button
            onClick={onSubmit}
            disabled={groupName.length < 1 || isPending || isImageUploading}
          >
            {isPending
              ? "수정 중..."
              : isImageUploading
                ? "이미지 업로드 중..."
                : "수정하기"}
          </Button>
        </div>
        <div className="text-center text-xs text-gray-800 tablet:text-lg">
          팀 이름은 회사명이나 모임 이름 등으로 설정하면 좋아요.
        </div>
      </div>
    </main>
  );
};

export default EditTeam;
