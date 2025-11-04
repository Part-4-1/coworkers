import Icon from "@/components/icon/Icon";
import cn from "@/utils/clsx";

/**
 * @author jinhyuk
 * @description 프로필 이미지를 보여주는 컴포넌트입니다.
 * @param image - 이미지 URL, 없을시 기본 이미지
 * @param size - "lg", "md", "sm" 프로필 크기 옵션

 */

interface ProfileProps {
  image?: string;
  size?: "lg" | "md" | "sm";
}

const Profile = ({ image, size = "lg" }: ProfileProps) => {
  const profileSize = {
    lg: 40,
    md: 32,
    sm: 24,
  }[size];

  return (
    <div className={cn("rounded-[12px]")}>
      {image ? (
        <img
          src={image}
          alt="프로필"
          width={profileSize}
          height={profileSize}
          className="rounded-[12px]"
        />
      ) : (
        <Icon
          icon="user"
          width={profileSize}
          height={profileSize}
          className="rounded-[12px] bg-gray-300"
        ></Icon>
      )}
    </div>
  );
};

export default Profile;
