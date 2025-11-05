import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config";
import { Icon } from "../index";
import cn from "@/utils/clsx";

interface BadgeProps {
  total: number;
  completed: number;
}

/**
 * @author hwitae
 * @description 할 일의 완료 상태를 시각적으로 보여주는 배지 컴포넌트입니다.
 * @param total - 총 할 일 개수
 * @param completed - 완료한 할 일 개수
 * @returns <Badge />
 * @example
 * <Badge total={5} completed={3} />
 */
const Badge = ({ total, completed }: BadgeProps) => {
  const fullConfig = resolveConfig(tailwindConfig);
  const colors = fullConfig.theme?.colors;

  return (
    <div className="w-fit gap-1 rounded-full bg-white px-2 py-1 flex-center">
      {completed === total && total ? (
        <Icon icon="progress" className="h-4 w-4 tablet:h-5 tablet:w-5" />
      ) : (
        <CircularProgressbar
          className="h-4 w-4 p-[2px] tablet:h-5 tablet:w-5"
          value={completed}
          maxValue={total}
          styles={buildStyles({
            trailColor: `${colors.gray[50]}`,
            pathColor: `${total ? colors.blue[200] : colors.gray[300]}`,
          })}
          strokeWidth={16}
        />
      )}

      <p
        className={cn(
          "text-md tablet:text-lg tablet:font-medium",
          total ? "text-blue-200" : "text-gray-700"
        )}
      >
        {completed}/{total}
      </p>
    </div>
  );
};

export default Badge;
