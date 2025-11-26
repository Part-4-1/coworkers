import { useState } from "react";

export const useTooltip = (isSidebarOpen: boolean) => {
  const [isHovered, setIsHovered] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  const handleMouseEnter = (e: React.MouseEvent) => {
    if (isSidebarOpen) return;

    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipPosition({
      top: rect.top + rect.height / 2,
      left: rect.right,
    });
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return {
    isHovered,
    tooltipPosition,
    handleMouseEnter,
    handleMouseLeave,
  };
};
