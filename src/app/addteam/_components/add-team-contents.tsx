"use client";

import { useForm } from "react-hook-form";
import { ProfileEdit, TextInput, Button } from "@/components/index";
import usePostGroup from "@/hooks/api/group/use-post-group";

const AddTeamContents = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<{ name: string }>({
    mode: "onBlur",
    defaultValues: { name: "" },
  });

  const { mutate: createGroup, isPending } = usePostGroup();

  const onSubmit = (data: { name: string }) => {
    createGroup({
      name: data.name,
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
          <ProfileEdit />
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
            disabled={!isValid || isPending}
          >
            {isPending ? "생성 중..." : "생성하기"}
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
