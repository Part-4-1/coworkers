import cn from "@/utils/clsx";
import Image from "next/image";
import { MouseEventHandler } from "react";
import Icon from "../icon/Icon";

/**
 * @author jinhyuk
 * @description 프로필 이미지를 보여주는 컴포넌트입니다.
 * @param image - 이미지 URL, 없을시 기본 이미지
 * @param size - "lg", "md", "sm" 프로필 크기 옵션
 * @param className - 추가 스타일을 부여하기 위해 사용
 * @param onClick - 클릭시 실행되는 함수, 존재할떄 cursor-pointer 적용
 * @param isMobileCircle - true일 때 모바일에서는 원형, tablet 이상에서는 각진 형태 (기본값 true)
 */

interface ProfileProps {
  image?: string | null;
  size?: "lg" | "md" | "sm" | "xs";
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  isMobileCircle?: boolean;
}

const Profile = ({
  image,
  size = "lg",
  className,
  onClick,
  isMobileCircle = true,
}: ProfileProps) => {
  const profileSize = {
    lg: "w-[40px] h-[40px]",
    md: "w-[32px] h-[32px]",
    sm: "w-[24px] h-[24px]",
    xs: "w-[20px] h-[20px]",
  }[size];

  const profileImageSize = {
    lg: 40,
    md: 32,
    sm: 24,
    xs: 20,
  }[size];

  const profileRadius = {
    lg: isMobileCircle
      ? "rounded-full tablet:rounded-[12px]"
      : "rounded-[12px]",
    md: isMobileCircle ? "rounded-full tablet:rounded-[8px]" : "rounded-[8px]",
    sm: isMobileCircle ? "rounded-full tablet:rounded-[6px]" : "rounded-[6px]",
    xs: isMobileCircle ? "rounded-full tablet:rounded-[6px]" : "rounded-[6px]",
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
