import cn from "@/utils/clsx";
import React from "react";
import Icon from "../../icon/Icon";
import ICONS_MAP from "../../icon/icons-map";

type IconKeys = keyof typeof ICONS_MAP;
interface SidebarMenuProps {
  iconName: IconKeys;
  title: string;
  isSelected?: boolean;
  onClick: () => void;
}

const menuStyles = {
  default:
    "flex bg-white w-full cursor-pointer items-center gap-3 rounded-xl p-4 hover:bg-gray-100 text-lg",
  selected: "bg-gray-200 text-blue-200 hover:bg-gray-200 cursor-default",
};

const iconStyles = {
  default: "text-gray-400",
  selected: "text-blue-200",
};

const SidebarMenu = ({
  iconName,
  title,
  isSelected,
  onClick,
}: SidebarMenuProps) => {
  return (
    <div
      className={cn(menuStyles.default, isSelected && menuStyles.selected)}
      onClick={onClick}
    >
      <Icon
        icon={iconName}
        width={20}
        height={20}
        className={cn(iconStyles.default, isSelected && iconStyles.selected)}
      />
      <span>{title}</span>
    </div>
  );
};

export default SidebarMenu;
