import { Member } from "@/types/members";
import BodyPcMemberSection from "./body-pc-member-section";
import BodyPcTaskSection from "./body-pc-task-section";

interface TeamBodyPcProps {
  members: Member[];
}

const TeamBodyPc = ({ members }: TeamBodyPcProps) => {
  return (
    <div>
      <div className="mb-[28px] mt-[32px] border-[1px] border-gray-300"></div>
      <div className="flex justify-between gap-[32px]">
        <BodyPcTaskSection taskCount={2} />
        <BodyPcMemberSection members={members} />
      </div>
    </div>
  );
};

export default TeamBodyPc;
