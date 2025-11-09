"use client";

import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/button/button";
import Icon from "@/components/icon/Icon";
import { useEffect, useState } from "react";

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
 * - 포털로 렌더링되는 공통 모달 래퍼
 * - 오버레이 클릭으로 닫기
 * - 헤더 제목/닫기 버튼, 본문, 푸터 슬롯 제공
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

          <motion.div
            className={`fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 ${widthClassName} max-h-[calc(100vh-48px)]`}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            <div className={`rounded-2xl bg-white shadow-lg ${containerClassName ?? ""}`}>
              {/* Header */}
              {(title || !hideCloseButton) && (
                <div className="relative h-8 flex items-center justify-center px-5 pt-5">
                  {title && (
                    <h2 className="text-sm font-semibold text-gray-900">
                      {title}
                    </h2>
                  )}
                  {!hideCloseButton && (
                    <Button
                      variant="none"
                      onClick={onClose}
                      aria-label="닫기"
                      className="absolute right-5"
                    >
                      <Icon icon="x" className="h-5 w-5 text-gray-500" />
                    </Button>
                  )}
                </div>
              )}
              {/* Body */}
              <div className="px-5 pb-4 pt-3">{children}</div>

              {/* Footer */}
              {footer && <div className="px-5 pb-5">{footer}</div>}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default BaseModal;