import { Button, Icon } from "@/components/index";
import cn from "@/utils/clsx";
import Image from "next/image";
import { MouseEventHandler } from "react";

/**
 * @author jinhyuk
 * @description 프로필 이미지 및 편집버튼이 있는 컴포넌트입니다.
 * @param image - 이미지 URL, 없을시 기본 이미지
 * @param className - 추가 스타일을 부여하기 위해 사용
 * @param onClick - 클릭시 실행되는 함수
 */

interface ProfileEditProps {
  image?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const ProfileEdit = ({ image, className, onClick }: ProfileEditProps) => {
  return (
    <div
      className={cn(
        "relative h-[78px] w-[77px] tablet:h-[116px] tablet:w-[112px]",
        "flex items-center justify-center",
        className
      )}
    >
      <div
        className={cn(
          "h-[64px] w-[64px] rounded-[20px]",
          "tablet:h-[100px] tablet:w-[100px] tablet:rounded-[32px]",
          "border-2 border-gray-300",
          "relative overflow-hidden"
        )}
      >
        {image ? (
          <Image
            src={image}
            alt="프로필"
            fill
            sizes="(max-width: 744px) 64px, 100px"
          />
        ) : (
          <Icon icon="user" className="bg-gray-300 object-cover"></Icon>
        )}
      </div>
      <Button
        onClick={onClick}
        variant="none"
        className={cn(
          "absolute bottom-[5px] right-0 rounded-full bg-gray-300",
          "h-[18px] w-[18px]",
          "tablet:bottom-[6px] tablet:h-[32px] tablet:w-[32px]",
          image ? "" : "border-2 border-white"
        )}
      >
        <Icon
          icon="smallPencil"
          className="h-[9px] w-[7px] cursor-pointer tablet:h-[16px] tablet:w-[12px]"
        />
      </Button>
    </div>
  );
};

export default ProfileEdit;
