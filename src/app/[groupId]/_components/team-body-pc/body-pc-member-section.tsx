import { ProfileMember } from "@/components";
import { Member } from "@/types/members";

interface BodyPcMemberSectionProps {
  members: Member[];
}

const BodyPcMemberSection = ({ members }: BodyPcMemberSectionProps) => {
  return (
    <section className="mt-[60px] w-[240px] rounded-[12px] border-[1px] border-gray-300 bg-white px-[20px] py-[24px]">
      <div className="mb-[24px] flex justify-between">
        <div>
          <span className="mr-[8px] text-lg font-medium text-blue-700">
            멤버
          </span>
          <span className="font-normal text-gray-800">
            ({members.length}명)
          </span>
        </div>
        <div className="cursor-pointer text-md font-semibold text-blue-200 flex-center">
          초대하기 +
        </div>
      </div>
      <div className="flex flex-col gap-[18px]">
        {members.map((member) => (
          <ProfileMember
            key={member.userId}
            userImage={member.userImage}
            userName={member.userName}
            userEmail={member.userEmail}
          />
        ))}
      </div>
    </section>
  );
};

export default BodyPcMemberSection;
