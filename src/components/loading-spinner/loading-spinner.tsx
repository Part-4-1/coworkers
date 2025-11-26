import LottieAnimation from "@/components/lottie/LottieAnimation";
import loader from "@/../public/animations/loader.json";

interface LoadingSpinnerProps {
  ariaLabel?: string;
}

/**
 * @author junyeol
 * @description 버튼 내부에서 사용하는 로딩 애니메이션 컴포넌트입니다.
 * @param ariaLabel - 접근성을 위한 레이블
 * @example
 * <Button disabled={isPending}>
 *   {isPending ? <LoadingSpinner /> : "등록하기"}
 * </Button>
 */
const LoadingSpinner = ({ ariaLabel = "로딩 중" }: LoadingSpinnerProps) => {
  return (
    <LottieAnimation
      animationData={loader}
      className="h-5 w-5"
      aria-label={ariaLabel}
    />
  );
};

export default LoadingSpinner;
