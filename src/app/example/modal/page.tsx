"use client";

import { useState } from "react";
import {
  Button,
  AlertModal,
  WarningModal,
  ConfirmModal,
  CancelConfirmModal,
  TaskListCreateModal,
  InviteMemberModal,
  PasswordResetModal,
  ChangePasswordModal,
  DangerLeaveModal,
  ProfileModal,
} from "@/components";

export default function ModalExamplePage() {
  const [open, setOpen] = useState(false);
  const [lastCreated, setLastCreated] = useState<string | null>(null);
  // 삭제: isWarningOpen, isAlertOpen, isConfirmOpen, isCancelOpen
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const [isResetOpen, setIsResetOpen] = useState(false);
  const [isChangeOpen, setIsChangeOpen] = useState(false);
  const [isDangerOpen, setIsDangerOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleTaskSubmit = (name: string) => setLastCreated(name);
  const handleSendReset = (email: string) => console.log("Reset email:", email);
  const handleChangePassword = (pw: string, confirm: string) =>
    console.log("Change password:", { pw, confirm });
  const handleDangerConfirm = () => console.log("Member leave confirmed");

  return (
    <div className="min-h-[60vh] gap-6 p-8 flex-col-center">
      <h1 className="text-2xl font-bold">공동 모달 종류</h1>
      <div className="grid w-[384px] grid-cols-2 gap-3">
        <Button onClick={() => setOpen(true)}>할 일 목록</Button>
        <Button onClick={() => setIsInviteOpen(true)}>멤버 초대</Button>
        <Button onClick={() => setIsResetOpen(true)}>비밀번호 재설정</Button>
        <Button onClick={() => setIsChangeOpen(true)}>비밀번호 변경하기</Button>
        <Button
          className="!hover:bg-[#e84343] !active:bg-[#d93c3c] !bg-[#FC4B4B]"
          onClick={() => setIsDangerOpen(true)}
        >
          회원 탈퇴
        </Button>
        <Button onClick={() => setIsProfileOpen(true)}>프로필 모달</Button>
      </div>

    
      <TaskListCreateModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onSubmit={handleTaskSubmit}
      />

      <InviteMemberModal
        isOpen={isInviteOpen}
        onClose={() => setIsInviteOpen(false)}
      />

      <PasswordResetModal
        isOpen={isResetOpen}
        onClose={() => setIsResetOpen(false)}
        onSend={handleSendReset}
      />

      <ChangePasswordModal
        isOpen={isChangeOpen}
        onClose={() => setIsChangeOpen(false)}
        onChange={handleChangePassword}
      />

      <DangerLeaveModal
        isOpen={isDangerOpen}
        onClose={() => setIsDangerOpen(false)}
        onConfirm={() => console.log("Member leave confirmed")}
      />

      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        avatarUrl="/profile-avatar.png"
        name="우지은"
        email="jieunn@codeit.com"
      />
    </div>
  );
}
