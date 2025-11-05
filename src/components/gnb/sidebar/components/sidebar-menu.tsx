import cn from "@/utils/clsx";
import React from "react";
import Icon from "../../../icon/Icon";
import ICONS_MAP from "../../../icon/icons-map";
import Sidebar from "../../Sidebar";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

type IconKeys = keyof typeof ICONS_MAP;
interface SidebarMenuProps {
  iconName: IconKeys;
  title: string;
  isSidebarOpen: boolean;
  isSelected?: boolean;
  onClick: () => void;
}

const menuStyles = {
  default:
    "flex bg-white w-full cursor-pointer items-center gap-3 rounded-xl p-4 hover:bg-gray-100 text-lg",
  selected: "bg-gray-200 text-blue-200 hover:bg-gray-200 cursor-default",
  sidebarOpen: "p-2",
};

const iconStyles = {
  default: "text-gray-400 w-6 h-6",
  selected: "text-blue-200",
  SidebarOpen: "w-5 h-5",
};

const SidebarMenu = ({
  iconName,
  title,
  isSelected,
  isSidebarOpen,
  onClick,
}: SidebarMenuProps) => {
  return (
    <Link
      className={cn(
        menuStyles.default,
        isSelected && menuStyles.selected,
        !isSidebarOpen && menuStyles.sidebarOpen
      )}
      onClick={onClick}
      href={"/"}
    >
      <Icon
        icon={iconName}
        width={24}
        height={24}
        className={cn(
          iconStyles.default,
          isSelected && iconStyles.selected,
          isSidebarOpen && iconStyles.SidebarOpen
        )}
      />
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="whitespace-nowrap"
          >
            {title}
          </motion.span>
        )}
      </AnimatePresence>
    </Link>
  );
};

export default SidebarMenu;
