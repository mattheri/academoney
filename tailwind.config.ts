import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./common/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./calculator/**/*.{js,ts,jsx,tsx,mdx}",
    "./auth/**/*.{js,ts,jsx,tsx,mdx}",
    "./common/**/*.{js,ts,jsx,tsx,mdx}",
    "./calendar/**/*.{js,ts,jsx,tsx,mdx}",
    "./slide-calendar/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ["primary-red"]: "#ef3832",
        ["accent-red"]: "#bf0c1d",
        ["primary-blue"]: "#092d74",
        ["accent-blue"]: "#dfcce4",
        ["white"]: "#ffffff",
        ["light-gray"]: "#e7e7e4",
      },
      fontFamily: {
        sans: ["var(--font-1, sans-serif)"],
        accent: ["var(--font-2, sans-serif)"],
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "col-gap": (value) => {
            return {
              columnGap: value,
            };
          },
        },
        {
          values: theme("spacing"),
        }
      );
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "row-gap": (value) => {
            return {
              rowGap: value,
            };
          },
        },
        {
          values: theme("spacing"),
        }
      );
    }),
  ],
};
export default config;
