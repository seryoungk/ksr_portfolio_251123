import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // retained but we will shift default to light/pinkish
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#ec4899", // Pink-500
        secondary: "#fce7f3", // Pink-100
        accent: "#8b5cf6", // Violet-500
        glass: {
          100: "rgba(255, 255, 255, 0.1)",
          200: "rgba(255, 255, 255, 0.2)",
          300: "rgba(255, 255, 255, 0.3)",
          400: "rgba(255, 255, 255, 0.4)",
        },
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        blob: "blob 8s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "20%": {
            transform: "translate(80px, -120px) scale(1.25)",
          },
          "40%": {
            transform: "translate(-100px, 60px) scale(0.9)",
          },
          "60%": {
            transform: "translate(120px, 80px) scale(1.15)",
          },
          "80%": {
            transform: "translate(-60px, -100px) scale(0.95)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
