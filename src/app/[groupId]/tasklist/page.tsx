"use client";

import { TeamBannerMember } from "@/components";
import groupData from "@/mocks/group.json";

const Page = () => {
  return (
    <div className="flex-col-center">
      <TeamBannerMember
        groupName={groupData.name}
        members={groupData.members}
        onSettingClick={() => {}}
      />
    </div>
  );
};

export default Page;
