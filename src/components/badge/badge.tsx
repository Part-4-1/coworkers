import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config";
import { Icon } from "../index";
import cn from "@/utils/clsx";

interface BadgeProps {
  total: number;
  completed: number;
  size?: "lg";
  className?: string;
}

const fullConfig = resolveConfig(tailwindConfig);
const colors = fullConfig.theme?.colors;

/**
 * @author hwitae
 * @description 할 일의 완료 상태를 시각적으로 보여주는 배지 컴포넌트입니다.
 * @param total - 총 할 일 개수
 * @param completed - 완료한 할 일 개수
 * @param size - 배지 크기 (기본값: 없음, "lg": 큰 크기)
 * @returns <Badge />
 */
const Badge = ({ total, completed, size, className }: BadgeProps) => {
  return (
    <div
      className={cn(
        "w-fit gap-1 rounded-full bg-white px-2 py-1 flex-center",
        className
      )}
    >
      <div className={cn("h-4 w-4", size && "h-5 w-5")}>
        {completed === total && total ? (
          <Icon icon="progress" />
        ) : (
          <CircularProgressbar
            className="p-[2px]"
            value={completed}
            maxValue={total}
            styles={buildStyles({
              trailColor: colors.gray[50],
              pathColor: total ? colors.blue[200] : colors.gray[300],
            })}
            strokeWidth={16}
          />
        )}
      </div>

      <p
        className={cn(
          "text-md",
          size && "text-lg font-medium",
          total ? "text-blue-200" : "text-gray-700"
        )}
      >
        {completed}/{total}
      </p>
    </div>
  );
};

export default Badge;
