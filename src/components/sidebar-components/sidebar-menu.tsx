import cn from "@/utils/clsx";
import React from "react";

interface SidebarMenuProps {
  IconComponent: React.ElementType;
  iconName: string;
  title: string;
  isSelected?: boolean;
  onClick: () => void;
}

const menuStyles = {
  default:
    "flex bg-white w-full cursor-pointer items-center gap-3 rounded-xl p-4 hover:bg-gray-100 text-lg",
  selected:
    "bg-gray-200 font-semibold text-blue-200 hover:bg-gray-200 cursor-default",
};

const iconStyles = {
  default: "text-gray-900",
  selected: "text-blue-200",
};

const SidebarMenu = ({
  IconComponent,
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
      <div>
        <IconComponent
          icon={iconName}
          width={20}
          height={20}
          className={cn(iconStyles.default, isSelected && iconStyles.selected)}
        />
      </div>
      <div>{title}</div>
    </div>
  );
};

export default SidebarMenu;
