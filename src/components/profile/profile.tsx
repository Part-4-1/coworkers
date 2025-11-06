import { Icon } from "@/components/index";
import cn from "@/utils/clsx";
import Image from "next/image";
import { MouseEventHandler } from "react";

/**
 * @author jinhyuk
 * @description 프로필 이미지를 보여주는 컴포넌트입니다.
 * @param image - 이미지 URL, 없을시 기본 이미지
 * @param size - "lg", "md", "sm" 프로필 크기 옵션
 * @param className - 추가 스타일을 부여하기 위해 사용
 * @param onClick - 클릭시 실행되는 함수, 존재할떄 cursor-pointer 적용
 */

interface ProfileProps {
  image?: string;
  size?: "lg" | "md" | "sm";
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const Profile = ({ image, size = "lg", className, onClick }: ProfileProps) => {
  const profileSize = {
    lg: "w-[40px] h-[40px]",
    md: "w-[32px] h-[32px]",
    sm: "w-[24px] h-[24px]",
  }[size];

  const profileImageSize = {
    lg: 40,
    md: 32,
    sm: 24,
  }[size];

  const profileRadius = {
    lg: "rounded-full tablet:rounded-[12px]",
    md: "rounded-full tablet:rounded-[8px]",
    sm: "rounded-full tablet:rounded-[6px]",
  }[size];

  return (
    <div
      onClick={onClick}
      className={cn(className, onClick && "cursor-pointer")}
    >
      {image ? (
        <Image
          src={image}
          alt="프로필"
          width={profileImageSize}
          height={profileImageSize}
          className={cn("object-cover", profileRadius, profileSize)}
        />
      ) : (
        <Icon
          icon="user"
          className={cn("bg-gray-300", profileRadius, profileSize)}
        ></Icon>
      )}
    </div>
  );
};

export default Profile;
