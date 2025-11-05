import ICONS_MAP from "./icons-map";

type IconKeys = keyof typeof ICONS_MAP;

interface IconProps {
  icon: IconKeys;
  width?: number;
  height?: number;
  className?: string;
}

/**
 * @author hwitae
 * @description 아이콘을 가져와 사용하는 컴포넌트 입니다.
 * @param icon - 아이콘 종류
 * @param width - 아이콘 가로 길이
 * @param height - 아이콘 세로 길이
 * @returns <SvgIcon />
 */
const Icon = ({ icon, width = 16, height = 16, className }: IconProps) => {
  const SvgIcon = ICONS_MAP[icon];

  return (
    <SvgIcon
      // width={width}
      // height={height}
      className={className}
      aria-hidden="true"
    />
  );
};

export default Icon;
