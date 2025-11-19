"use client";

import { Button, ProfileEdit, TextInput } from "@/components";
import { mockGroupData } from "@/mocks/group-data";
import cn from "@/utils/clsx";
import { useState } from "react";

interface EditTeamProps {
  groupId: string;
}

const EditTeam = ({ groupId }: EditTeamProps) => {
  const currentGroup = mockGroupData[0];
  const [groupName, setGroupName] = useState(currentGroup.name);

  const onSubmit = () => {
    console.log("API 호출", { groupId, groupName });
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
        <div className="mb-[12px] tablet:mb-[24px]">
          <ProfileEdit image={currentGroup.image} />
        </div>
        <h2 className="mb-[8px] w-full items-start text-md font-medium text-blue-700 tablet:mb-[12px] tablet:text-lg">
          팀 이름
        </h2>
        <div className="mb-[40px] w-full">
          <TextInput
            id={groupId}
            className="border-gray-300 text-md text-blue-700 tablet:text-lg"
            defaultValue={currentGroup.name}
            spellCheck={false}
            onChange={(e) => setGroupName(e.target.value)}
            placeholder="팀 이름을 입력해주세요."
          />
        </div>
        <div className="mb-[20px] w-full tablet:mb-[24px]">
          <Button onClick={onSubmit} disabled={groupName.length < 1}>
            수정하기
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
