// 공통 모달 컴포넌트들(Warning/Alert/Confirm/CancelConfirm/Danger/TaskListCreate)
"use client";

import { useState } from "react";
import BaseModal from "./base-modal";
import Button from "@/components/button/button";
import TextInput from "@/components/input-components/text-input";
import Icon from "@/components/icon/Icon";

type BasicModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type MessageModalProps = BasicModalProps & {
  message: string;
};

export const WarningModal = ({ isOpen, onClose, message }: BasicModalProps) => {
  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      // Large 사이즈: width 384px, height 211px
      widthClassName="w-[384px]"
      containerClassName="h-[211px]"
      title="멤버 초대"
      footer={
        <Button className="w-full" onClick={onClose}>
          링크 복사하기
        </Button>
      }
    >
      <p className="text-center text-sm text-gray-800">
        그룹에 참여할 수 있는 링크를 복사합니다.
      </p>
    </BaseModal>
  );
};

export const AlertModal = ({ isOpen, onClose, message }: BasicModalProps) => {
  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title="알림"
      footer={
        <Button className="w-full" onClick={onClose}>
          확인
        </Button>
      }
    >
      <div className="min-h-[120px] flex-col-center">
        <p className="text-center text-sm text-gray-800">{message}</p>
      </div>
    </BaseModal>
  );
};

type ConfirmModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message: string;
};

export const ConfirmModal = ({ isOpen, onClose, onConfirm, message }: ConfirmModalProps) => {
  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title="확인"
      footer={
        <div className="flex gap-3">
          <Button variant="outlined" className="flex-1" onClick={onClose}>
            취소
          </Button>
          <Button className="flex-1" onClick={onConfirm}>
            확인
          </Button>
        </div>
      }
    >
      <div className="min-h-[120px] flex-col-center">
        <p className="text-center text-sm text-gray-800">{message}</p>
      </div>
    </BaseModal>
  );
};

export const CancelConfirmModal = ({ isOpen, onClose, onConfirm, message }: ConfirmModalProps) => {
  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title="취소 확인"
      footer={
        <div className="flex gap-3">
          <Button variant="outlined" className="flex-1" onClick={onClose}>
            돌아가기
          </Button>
          <Button className="flex-1" onClick={onConfirm}>
            취소하기
          </Button>
        </div>
      }
    >
      <div className="min-h-[120px] flex-col-center">
        <p className="text-center text-sm text-gray-800">{message}</p>
      </div>
    </BaseModal>
  );
};

type TaskListCreateModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (name: string) => void;
};

export const TaskListCreateModal = ({ isOpen, onClose, onSubmit }: { isOpen: boolean; onClose: () => void; onSubmit: (name: string) => void; }) => {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (!name.trim()) return;
    onSubmit(name.trim());
    setName("");
    onClose();
  };

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title="할 일 목록"
      widthClassName="w-[384px]"
      containerClassName="h-[235px]"
      footer={
        <Button className="w-full" onClick={handleSubmit}>
          만들기
        </Button>
      }
    >
      <TextInput
        id="tasklist-name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="목록 명을 입력해주세요."
        className="w-full"
      />
    </BaseModal>
  );
};

type DangerModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message: string;
};

export const DangerModal = ({ isOpen, onClose, onConfirm, message }: DangerModalProps) => {
  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title="회원 탈퇴"
      footer={
        <div className="flex gap-3">
          <Button variant="outlined" className="flex-1" onClick={onClose}>
            취소
          </Button>
          <Button className="flex-1" onClick={onConfirm}>
            탈퇴하기
          </Button>
        </div>
      }
    >
      <div className="min-h-[120px] flex-col-center">
        <p className="text-center text-sm text-gray-800">{message}</p>
      </div>
    </BaseModal>
  );
};

export const InviteMemberModal = ({ isOpen, onClose }: BasicModalProps) => {
  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title="멤버 초대"
      widthClassName="w-[384px]"
      containerClassName="h-[211px]"
      footer={
        <Button className="w-full" onClick={onClose}>
          링크 복사하기
        </Button>
      }
    >
      <p className="text-center text-sm text-gray-800">
        그룹에 참여할 수 있는 링크를 복사합니다.
      </p>
    </BaseModal>
  );
};

export const PasswordResetModal = ({ isOpen, onClose, onSend }: { isOpen: boolean; onClose: () => void; onSend: (email: string) => void; }) => {
  const [email, setEmail] = useState("");

  const handleSend = () => {
    if (!email.trim()) return;
    onSend(email.trim());
    onClose();
  };

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title="비밀번호 재설정"
      widthClassName="w-[384px]"
      containerClassName="h-[260px]"
      footer={
        <div className="flex gap-3">
          <Button variant="outlined" className="flex-1" onClick={onClose}>
            닫기
          </Button>
          <Button className="flex-1" onClick={handleSend}>
            링크 보내기
          </Button>
        </div>
      }
    >
      <div className="flex flex-col gap-2">
        <p className="text-center text-sm text-gray-700">비밀번호 재설정 링크를 보내드립니다.</p>
        <TextInput
          id="reset-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일을 입력하세요."
          className="w-full"
        />
      </div>
    </BaseModal>
  );
};

export const ChangePasswordModal = ({ isOpen, onClose, onChange }: { isOpen: boolean; onClose: () => void; onChange: (password: string, confirm: string) => void; }) => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleChange = () => {
    if (!password.trim() || !confirm.trim()) return;
    onChange(password, confirm);
    onClose();
  };

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title="비밀번호 변경하기"
      widthClassName="w-[384px]"
      containerClassName="h-[353px]"
      footer={
        <div className="flex gap-3">
          <Button variant="outlined" className="flex-1" onClick={onClose}>
            닫기
          </Button>
          <Button className="flex-1" onClick={handleChange}>
            변경하기
          </Button>
        </div>
      }
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-sm text-gray-800">새 비밀번호</span>
          <TextInput
            id="new-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="새 비밀번호를 입력해주세요."
            className="w-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm text-gray-800">새 비밀번호 확인</span>
          <TextInput
            id="new-password-confirm"
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            placeholder="새 비밀번호를 다시 한 번 입력해주세요."
            className="w-full"
          />
        </div>
      </div>
    </BaseModal>
  );
};

export const DangerLeaveModal = ({ isOpen, onClose, onConfirm }: BasicModalProps & { onConfirm: () => void; }) => {
  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      widthClassName="w-[384px]"
      containerClassName="h-[245px]"
      // 타이틀 없이 경고 아이콘 + 본문만 표시
      footer={
        <div className="flex gap-3">
          <Button variant="outlined" className="flex-1" onClick={onClose}>
            닫기
          </Button>
          <Button variant="danger" className="flex-1" onClick={onConfirm}>
            회원 탈퇴
          </Button>
        </div>
      }
    >
      <div className="flex-col-center gap-2">
        <Icon icon="alert" className="w-5 h-5 text-red-400" />
        <p className="text-center text-sm font-medium text-red-400">
          회원 탈퇴를 진행하시겠어요?
        </p>
        <p className="text-center text-sm text-gray-700">
          그룹장으로 있는 그룹은 자동으로 삭제되고,
          <br />
          모든 그룹에서 나가집니다.
        </p>
      </div>
    </BaseModal>
  );
};
export default BaseModal;