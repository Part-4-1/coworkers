"use client";

import React, { useRef, useEffect } from "react";
import lottie, { AnimationItem } from "lottie-web";

interface LottieAnimationProps {
  animationData: object;
  loop?: boolean;
  autoplay?: boolean;
  speed?: number;
  isPaused?: boolean;
  isStopped?: boolean;
  className?: string;
  style?: React.CSSProperties;
  "aria-label"?: string;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationData,
  loop = true,
  autoplay = true,
  speed = 1,
  isPaused = false,
  isStopped = false,
  className,
  style,
  "aria-label": ariaLabel,
}) => {
  const animationContainer = useRef<HTMLDivElement>(null);
  const animationInstance = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (!animationContainer.current) return;

    const animation = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop,
      autoplay,
      animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    });

    animationInstance.current = animation;

    return () => {
      animation.destroy();
      animationInstance.current = null;
    };
  }, [animationData, loop, autoplay]);

  useEffect(() => {
    const animation = animationInstance.current;
    if (!animation) return;

    if (isStopped) {
      animation.stop();
      return;
    }

    if (isPaused) {
      animation.pause();
    } else {
      animation.play();
    }

    animation.setSpeed(speed);
  }, [isPaused, isStopped, speed]);

  return (
    <div
      ref={animationContainer}
      className={className}
      style={style}
      role="img"
      aria-label={ariaLabel}
    />
  );
};

export default LottieAnimation;
