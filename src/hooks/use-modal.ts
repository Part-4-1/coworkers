"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback } from "react";

export const useModal = (modalName: string) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isOpen = searchParams.get("modal") === modalName;

  const open = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("modal", modalName);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }, [modalName, pathname, router, searchParams]);

  const close = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("modal");
    const newUrl = params.toString()
      ? `${pathname}?${params.toString()}`
      : pathname;
    router.push(newUrl, { scroll: false });
  }, [pathname, router, searchParams]);

  return { isOpen, open, close };
};
