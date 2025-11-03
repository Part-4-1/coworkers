import type { Config } from "tailwindcss";
import { flexCenter, flexColCenter } from "./src/utils/custom-style-plugins";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.stories.@(js|ts|jsx|tsx)",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#F1F5F9",
          100: "#F8FAFC",
          200: "#EEF3FF",
          300: "#E2E8F0",
          700: "#94A3B8",
          800: "#64748B",
          900: "#CBD5E1",
        },
        blue: {
          100: "#74A1FB",
          200: "#5189FA",
          300: "#416EC8",
          400: "#3B63B5",
          500: "#315296",
          600: "#334155",
          700: "#1E293B",
          800: "#0F172A",
        },
        red: {
          100: "#FC4B4B",
          200: "#F43F5E",
        },
        pink: "#EC4899",
        orange: "#F97316",
        yellow: "#EAB308",
        cyan: "#06B6D4",
        purple: "#A855F7",
      },
      screens: {
        mobile: "375px",
        tablet: "744px",
        pc: "1280px",
      },
    },
    fontSize: {
      xs: ["12px", "14px"],
      sm: ["13px", "16px"],
      md: ["14px", "17px"],
      lg: ["16px", "19px"],
      "2lg": ["18px", "21px"],
      xl: ["20px", "24px"],
      "2xl": ["24px", "28px"],
      "3xl": ["32px", "38px"],
      "4xl": ["40px", "48px"],
    },
  },
  plugins: [flexCenter, flexColCenter],
};

export default config;
