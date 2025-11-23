"use client";

import { useRef } from "react";
import { useForm } from "react-hook-form";
import { ProfileEdit, TextInput, Button, Icon } from "@/components/index";
import usePostGroup from "@/hooks/api/group/use-post-group";
import { useImageUpload } from "@/hooks/image-upload/use-image-upload";
import { useGetUserInfoQuery } from "@/hooks/api/user/use-get-user-info-query";

const AddTeamContents = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { data: userInfo } = useGetUserInfoQuery();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<{ name: string }>({
    mode: "onBlur",
    defaultValues: { name: "" },
  });

  const { mutate: createGroup, isPending } = usePostGroup();

  const {
    previews,
    handleFile,
    removeImage,
    isLoading: isImageUploading,
  } = useImageUpload({
    maxCount: 1,
  });

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

  const handleRemoveImage = () => {
    if (previews[0]) {
      removeImage(previews[0].id);
    }
  };

  const onSubmit = (data: { name: string }) => {
    createGroup({
      name: data.name,
      image: previews[0]?.url,
    });
  };

  return (
    <div className="flex flex-col items-start gap-8 px-[21px] pb-[74.5px] pt-[52.5px] tablet:gap-10 tablet:px-[45px] tablet:pb-[64px] tablet:pt-[61px]">
      <h2 className="text-xl font-bold text-blue-700 tablet:text-2xl">
        팀 생성하기
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-8"
      >
        <div className="w-full gap-6 flex-col-center">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          <div className="group relative">
            <ProfileEdit image={previews[0]?.url} onClick={handleImageClick} />
            {previews[0] && (
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
            <p className="text-xs font-medium text-blue-700 tablet:text-lg">
              팀 이름
            </p>
            <TextInput
              id="teamName"
              placeholder="팀 이름을 입력해주세요."
              className="placeholder:text-xs placeholder:text-gray-800 placeholder:tablet:text-lg"
              {...register("name", {
                required: "팀 이름을 입력해주세요.",
                minLength: {
                  value: 1,
                  message: "팀 이름은 최소 1자 이상이어야 합니다.",
                },
                maxLength: {
                  value: 30,
                  message: "팀 이름은 최대 30자까지 가능합니다.",
                },
                validate: (value) => {
                  const isDuplicate = userInfo?.memberships?.some(
                    (membership) => membership.group?.name === value
                  );
                  return isDuplicate ? "이미 존재하는 이름입니다." : true;
                },
              })}
            />
            {errors.name && (
              <p className="text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-6">
          <Button
            type="submit"
            variant="solid"
            className="text-lg font-medium"
            disabled={!isValid || isPending || isImageUploading}
          >
            {isPending
              ? "생성 중..."
              : isImageUploading
                ? "이미지 업로드 중..."
                : "생성하기"}
          </Button>
          <p className="text-xs text-gray-800 tablet:text-lg">
            팀 이름은 회사명이나 모임 이름 등으로 설정하면 좋아요.
          </p>
        </div>
      </form>
    </div>
  );
};

export default AddTeamContents;
