import cn from "@/utils/clsx";
import ICONS_MAP from "../icon/icons-map";
import { buttonStyles, defaultStyle } from "./button-styles";
import Icon from "../icon/Icon";

type IconKeys = keyof typeof ICONS_MAP;

interface ButtonProps {
  variant?: "solid" | "outlined" | "outlined-secondary";
  icon?: IconKeys;
  text: string;
  className?: string;
  disabled?: boolean;
}

const Button = ({
  variant = "solid",
  icon,
  text,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(defaultStyle, buttonStyles[variant], className)}
      {...props}
    >
      {icon && <Icon icon={icon} width={16} height={16} />}
      {text}
    </button>
  );
};

export default Button;
