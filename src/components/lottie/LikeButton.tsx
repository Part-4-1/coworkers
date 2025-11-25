"use client";

import React, { useRef, useEffect } from "react";
import lottie, { AnimationItem } from "lottie-web";
import likeAnimation from "@/../public/animations/like-animation.json";

interface LikeButtonProps {
  isLiked: boolean;
  onAnimationTrigger?: () => void;
}

const LikeButton: React.FC<LikeButtonProps> = ({
  isLiked,
  onAnimationTrigger,
}) => {
  const animationContainer = useRef<HTMLDivElement>(null);
  const animationInstance = useRef<AnimationItem | null>(null);
  const prevIsLiked = useRef(isLiked);

  useEffect(() => {
    if (!animationContainer.current) return;

    const animation = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: likeAnimation,
    });

    animation.setSpeed(2);

    animationInstance.current = animation;

    return () => {
      animation.destroy();
      animationInstance.current = null;
    };
  }, []);

  useEffect(() => {
    const animation = animationInstance.current;
    if (!animation) return;

    if (!prevIsLiked.current && isLiked) {
      animation.stop();
      animation.play();
      onAnimationTrigger?.();
    }

    prevIsLiked.current = isLiked;
  }, [isLiked, onAnimationTrigger]);

  return (
    <div
      ref={animationContainer}
      className="pointer-events-none absolute z-10"
      style={{
        width: "200px",
        height: "200px",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};

export default LikeButton;
