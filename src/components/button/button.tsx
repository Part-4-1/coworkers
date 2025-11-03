import cn from "@/utils/clsx";
import { buttonSizes, buttonStyles } from "./button-styles";
import { ComponentProps, ReactNode } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: "none" | "solid" | "outlined" | "outlined-secondary" | "alert";
  size?: "lg" | "sm";
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
}

/**
 * @author hwitae
 * @description 버튼 컴포넌트 입니다.
 * @param variant - 버튼 기본 스타일
 * @param size - 버튼 padding, font-size 조정
 * @example
 * solid 스타일의 버튼을 생성할 수 있습니다.
 * <Button>생성하기</Button>
 *
 * 아이콘만 있는 버튼을 선언할 수 있습니다.
 * <Button variant="none">
 *  <Icon icon="smallPencil" width={12} height={16} />
 * </Button>
 *
 * 작은 사이즈의 버튼을 선언합니다.
 * <Button variant="outlined" size="sm">
 *  <Icon icon="check" width={16} height={16} />
 *    변경하기
 * </Button>
 */
const Button = ({
  variant = "solid",
  size = "lg",
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "gap-1 font-semibold flex-center",
        buttonStyles[variant],
        buttonSizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
