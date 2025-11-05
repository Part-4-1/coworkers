import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config";
import { Icon } from "../index";

interface BadgeProps {
  total: number;
  completed: number;
}

const Badge = ({ total, completed }: BadgeProps) => {
  const fullConfig = resolveConfig(tailwindConfig);
  const colors = fullConfig.theme?.colors;

  return (
    <div className="w-fit gap-1 rounded-full bg-white px-2 py-1 flex-center">
      {completed === total ? <Icon icon="progress" className="h-5 w-5" /> : ""}
      <div className="h-3 w-3 tablet:h-4 tablet:w-4">
        <CircularProgressbar
          value={completed}
          maxValue={total}
          styles={buildStyles({
            trailColor: `${colors.gray[50]}`,
            pathColor: `${colors.blue[200]}`,
          })}
          strokeWidth={20}
        />
      </div>
      <p className="text-md text-blue-200 tablet:text-lg">
        {completed}/{total}
      </p>
    </div>
  );
};

export default Badge;
