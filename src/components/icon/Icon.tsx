import ICONS_MAP from "./icons-map";

type IconKeys = keyof typeof ICONS_MAP;

interface IconProps {
  icon: IconKeys;
  className?: string;
}

/**
 * @author hwitae
 * @description 아이콘을 가져와 사용하는 컴포넌트 입니다.
 * @param icon - 아이콘 종류
 * @param className - 해당 속성으로 크기를 조절합니다
 * @returns <Icon />
 */
const Icon = ({ icon, className }: IconProps) => {
  const SvgIcon = ICONS_MAP[icon];

  return <SvgIcon className={className} aria-hidden="true" />;
};

export default Icon;
