import { Icon } from "@/components/index";
import cn from "@/utils/clsx";
import Image from "next/image";
import { MouseEventHandler } from "react";

/**
 * @author jinhyuk
 * @description 프로필 이미지를 보여주는 컴포넌트입니다.
 * @param image - 이미지 URL, 없을시 기본 이미지
 * @param size - "lg", "md", "sm" 프로필 크기 옵션
 * @param isCircle - true 일떈 원형, false일시 사이즈별 radius 적용
 * @param onClick - 클릭시 실행되는 함수, true일때 cursor-pointer 적용
 */

interface ProfileProps {
  image?: string;
  size?: "lg" | "md" | "sm";
  className?: string;
  isCircle?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const Profile = ({
  image,
  size = "lg",
  className,
  isCircle = false,
  onClick,
}: ProfileProps) => {
  const profileSize = {
    lg: 40,
    md: 32,
    sm: 24,
  }[size];

  const profileRadius = isCircle
    ? "rounded-full"
    : {
        lg: "rounded-[12px]",
        md: "rounded-[8px]",
        sm: "rounded-[6px]",
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
          width={profileSize}
          height={profileSize}
          className={cn("object-cover", profileRadius)}
        />
      ) : (
        <Icon
          icon="user"
          width={profileSize}
          height={profileSize}
          className={cn("bg-gray-300", profileRadius)}
        ></Icon>
      )}
    </div>
  );
};

export default Profile;
