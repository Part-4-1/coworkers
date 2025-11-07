import { Icon, Profile } from "@/components/index";
import cn from "@/utils/clsx";
import { MouseEventHandler } from "react";

/**
 * @author jinhyuk
 * @description 팀 멤버의 정보를 보여주는 컴포넌트 입니다.
 * @param userImage - 프로필이미지 URL, 없을시 기본 이미지
 * @param userName - 멤버의 이름
 * @param userEmail - 멤버의 이메일
 * @param onClick - 케밥버튼 클릭시 실행되는 콜백함수
 * @param className - 추가 스타일을 부여하기 위해 사용
 */

interface ProfileMemberProps {
  userImage?: string;
  userName: string;
  userEmail: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  className?: string;
}

const ProfileMember = ({
  userImage,
  userName,
  userEmail,
  onClick,
  className,
}: ProfileMemberProps) => {
  return (
    <div className={cn("flex h-[32px] w-[200px] bg-transparent", className)}>
      <Profile image={userImage} size="md" />
      <div className="ml-[12px] flex w-[140px] flex-col justify-center">
        <span className="truncate text-sm font-semibold">{userName}</span>
        <span className="truncate text-xs">{userEmail}</span>
      </div>

      <div
        className="flex w-[16px] cursor-pointer justify-center"
        onClick={onClick}
      >
        <Icon icon="kebab" />
      </div>
    </div>
  );
};

export default ProfileMember;
