"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import UnsavedChangesModalUI from "@/components/modal-ui/unsaved-changes-modal-ui";
import usePrompt from "@/hooks/use-prompt";

interface UseUnsavedChangesGuardOptions {
  isDirty: boolean;
  onSave: () => void;
}

const useUnsavedChangesGuard = ({
  isDirty,
  onSave,
}: UseUnsavedChangesGuardOptions) => {
  const router = useRouter();
  const {
    Modal: UnsavedModal,
    openPrompt: openUnsavedModal,
    closePrompt: closeUnsavedModal,
  } = usePrompt();

  const [pendingNavigation, setPendingNavigation] = useState<string | null>(
    null
  );

  {
    /* 탭 닫기/새로고침 브라우저 기본 경고 */
  }
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isDirty) {
        e.preventDefault();
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isDirty]);

  {
    /* 페이지 이동시 커스텀 경고 모달 */
  }
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!isDirty) return;

      const target = e.target as HTMLElement;
      const link = target.closest("a");

      if (link && link.href && !link.href.startsWith("#")) {
        const url = new URL(link.href);
        const currentUrl = new URL(window.location.href);

        if (url.pathname !== currentUrl.pathname) {
          e.preventDefault();
          e.stopPropagation();
          setPendingNavigation(url.href);
          openUnsavedModal();
        }
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [isDirty, openUnsavedModal]);

  {
    /* 뒤로가기 버튼 클릭시 커스텀 경고 모달 */
  }
  useEffect(() => {
    if (!isDirty) return;

    const handlePopState = () => {
      openUnsavedModal();
      window.history.pushState(null, "", window.location.href);
    };

    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [isDirty, openUnsavedModal]);

  const handleSaveAndNavigate = () => {
    onSave();
    closeUnsavedModal();
    if (pendingNavigation) {
      router.push(pendingNavigation);
      setPendingNavigation(null);
    }
  };

  const handleCancel = () => {
    closeUnsavedModal();
    setPendingNavigation(null);
  };

  const UnsavedChangesModal = () => (
    <UnsavedModal>
      <UnsavedChangesModalUI
        contents={<>저장하지 않은 변경사항이 있습니다</>}
        description={
          <>
            변경사항을 저장하지 않고 나가면
            <br />
            모든 수정 내용이 사라집니다.
          </>
        }
        handleSave={handleSaveAndNavigate}
        handleClose={handleCancel}
      />
    </UnsavedModal>
  );

  return {
    UnsavedChangesModal,
  };
};

export default useUnsavedChangesGuard;
