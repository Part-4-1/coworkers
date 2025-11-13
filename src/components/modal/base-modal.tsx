"use client";

import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/button/button";
import Icon from "@/components/icon/Icon";
import { useEffect, useState } from "react";
import useMediaQuery from "@/hooks/use-media-query";
interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  widthClassName?: string; // e.g. w-[360px]
  hideCloseButton?: boolean;
  containerClassName?: string; // 내부 카드 높이/추가 스타일 제어
}

/**
 * BaseModal
 * - 포터로 렌더링되는 공통 모달 래퍼
 * - 오버레이 클릭으로 닫기
 * - 헤더 제목/닫기 버튼, 본문, 푸터 슬롯
 */
const BaseModal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  widthClassName = "w-[min(360px,calc(100vw-48px))]",
  hideCloseButton = false,
  containerClassName,
}: BaseModalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 반응형 애니메이션/포지션 제어
  const isMobile = useMediaQuery("(max-width: 743px)");
  const contentVariants = isMobile
    ? {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 16 },
      }
    : {
        initial: { opacity: 0, scale: 0.96 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.96 },
      };
  const modalPositionClass = isMobile
    ? "bottom-0 top-auto translate-y-0"
    : "";

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            onClick={onClose}
          />
          <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
          <motion.div 
              className={`md:relative fixed bottom-0 z-50 ${modalPositionClass} ${widthClassName} flex flex-col rounded-t-2xl bg-white shadow-lg md:rounded-2xl ${containerClassName ?? ""} max-h-[calc(100vh-48px)]`}
              initial={contentVariants.initial}
              animate={contentVariants.animate}
              exit={contentVariants.exit}
              transition={{ duration: 0.15, ease: "easeOut" }}
            >
            <div
                className={`relative rounded-2xl bg-white shadow-lg ${containerClassName ?? ""} flex min-h-[220px] flex-col items-center justify-center gap-4 px-5 py-5`}
              >
              {/* Header */}
                {(title || !hideCloseButton) && (
                  <div className="flex h-8 items-center justify-center">
                    {title && (
                      <h2 className="text-sm font-semibold text-gray-900">
                        {title}
                      </h2>
                    )}
                  </div>
              )}
              {!hideCloseButton && (
                <Button
                  variant="none"
                  onClick={onClose}
                  aria-label="닫기"
                  className="absolute right-4 top-4"
                >
                  <Icon icon="x" className="h-5 w-5 text-gray-500" />
                </Button>
              )}
              {/* Body */}
              <div className="w-full">{children}</div>

              {/* Footer */}
              {footer && <div className="w-full">{footer}</div>}
            </div>
          </motion.div>
        </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default BaseModal;
