import Image from "next/image";
import { mockUser } from "@/mocks/sidebar-data";

const SidebarFooter = () => {
  if (true) {
    return (
      <div className="mb-6 flex gap-3 border-t border-gray-300 pt-5">
        <div className="relative h-8 w-8 rounded-lg tablet:h-10 tablet:w-10 tablet:rounded-xl">
          <Image
            src={"/default-profile.png"}
            alt="프로파일 이미지"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <span className="flex flex-col justify-center gap-[2px]">로그인</span>
      </div>
    );
  }

  return (
    <div className="mb-6 flex gap-3 border-t border-gray-300 pt-5">
      <div className="relative h-8 w-8 rounded-lg tablet:h-10 tablet:w-10 tablet:rounded-xl">
        <Image
          src={mockUser[0].image || "/default-profile.png"}
          alt="프로파일 이미지"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-col justify-center gap-[2px]">
        <span className="text-sm font-medium text-blue-700">
          {mockUser[0].nickname}
        </span>
        <span className="text-xs text-gray-700">
          {mockUser[0].memberships[0].group.name}
        </span>
      </div>
    </div>
  );
};

export default SidebarFooter;
