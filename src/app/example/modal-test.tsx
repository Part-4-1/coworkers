"use client";

import { useState } from "react";
import {
  WarningModal,
  AlertModal,
  ConfirmModal,
  CancelConfirmModal,
  DangerModal,
} from "@/components/common/modal/common-modal";

export default function ModalPage() {
  const [isWarningOpen, setIsWarningOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isCancelOpen, setIsCancelOpen] = useState(false);

  const handleConfirm = () => {
    alert("확인 버튼이 클릭되었습니다.");
    setIsConfirmOpen(false);
  };

  const handleCancel = () => {
    alert("취소하기 버튼이 클릭되었습니다.");
    setIsCancelOpen(false);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="mb-6 text-2xl font-bold">공통 모달 페이지</h1>

      <div className="flex flex-col gap-4 md:flex-row md:flex-wrap">
        <button
          onClick={() => setIsWarningOpen(true)}
          className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
        >
          경고 모달 열기
        </button>

        <button
          onClick={() => setIsAlertOpen(true)}
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          이메일 복사하기
        </button>

        <button
          onClick={() => setIsConfirmOpen(true)}
          className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
        >
          비밀번호 재설정
        </button>

        <button
          onClick={() => setIsCancelOpen(true)}
          className="bg-orange-500 hover:bg-orange-600 rounded px-4 py-2 text-white"
        >
          취소 확인 모달 열기
        </button>

        <button
          onClick={() => setIsCancelOpen(true)}
          className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
        >
          회원 탈퇴 모달 열기
        </button>
      </div>

      {/* 래퍼 컴포넌트들 (내부적으로 common-modal 사용) */}
      <WarningModal
        isOpen={isWarningOpen}
        onClose={() => setIsWarningOpen(false)}
        message="내 프로필을 먼저 등록해 주세요"
      />

      <AlertModal
        isOpen={isAlertOpen}
        onClose={() => setIsAlertOpen(false)}
        message="알림 메시지입니다."
      />

      <ConfirmModal
        isOpen={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        onConfirm={handleConfirm}
        message="거절하시겠어요?"
      />

      <CancelConfirmModal
        isOpen={isCancelOpen}
        onClose={() => setIsCancelOpen(false)}
        onConfirm={handleCancel}
        message="취소하시겠어요?"
      />
      <DangerModal
        isOpen={isCancelOpen}
        onClose={() => setIsCancelOpen(false)}
        onConfirm={handleCancel}
        message="회원 탈퇴하시겠어요?"
      />
    </div>
  );
}
