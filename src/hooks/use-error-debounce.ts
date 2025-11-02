"use client";
import { useEffect, useRef } from "react";
import { EMAIL_REGEX, PASSWORD_REGEX } from "@/constants/regex";

export const useErrorDebounce = (
  field: "email" | "password",
  trigger: (name: typeof field) => Promise<boolean>,
  clearErrors: (name: typeof field) => void,
  delay = 300
) => {
  const timerRef = useRef<number | null>(null);

  const schedule = (value: string) => {
    clearErrors(field);

    const trimmed = value.trim();
    if (!trimmed) {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
      return;
    }

    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
    }

    timerRef.current = window.setTimeout(() => {
      const isValid =
        field === "email"
          ? EMAIL_REGEX.test(trimmed)
          : PASSWORD_REGEX.test(trimmed);

      if (isValid) {
        void trigger(field);
      }
    }, delay);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  return schedule;
};
