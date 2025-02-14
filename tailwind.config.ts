import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        "primary-orange": "#F38023",
        "primary-blue": "#11344E",
        "blue-light": "#5A98FC",
        "blue-lighter": "#9FBDFD",
        "red-dark": "#E8565C",
        "red-light": "#F2A0A4",
        "blue-dark": "#025FAC",
        "blue-muted": "#73BFFD",
        "purple-dark": "#861BB6",
        "purple-light": "#DEB2F4",
        "pink-light": "#F88778",
        "yellow-bright": "#FFCC00",
        "yellow-muted": "#FEF0B8",
        "orange-bright": "#FF6633",
        "gray-dark": "#585858",
        "gray-light": "#D6D6D6",
        "gradiant-security-start": "#D54927",
        "gradiant-security-end": "#5A98FD",
        "gradiant-network-start": "#D54927",
        "gradiant-network-end": "#025FAC",
        "gradiant-managed-start": "#D54927",
        "gradiant-managed-end": "#861BB6",
        "gradiant-managed-secondary-start": "#D54927",
        "gradiant-managed-secondary-end": "#FFCC00",
        "gradiant-studio-start": "#FFC5B3",
        "gradiant-studio-end": "#FF6633",
      },

      fontSize: {
        h1: "3.5rem",
        h2: "8.5rem",
        // Added custom font sizes for button text:
        "button-sm": ["10px", { lineHeight: "1.5" }], // Default (screens <1024px)
        "button-md": ["16px", { lineHeight: "1.5" }], // For screens >=1024px
      },

      screens: {
        'h-sm-w-sm': { 'raw': '(max-height: 650px) and (max-width: 768px)' },
        'h-sm-w-md': { 'raw': '(max-height: 650px) and (min-width: 769px) and (max-width: 1024px)' },
        'h-sm-w-lg': { 'raw': '(max-height: 650px) and (min-width: 1025px)' },
        'h-md-w-sm': { 'raw': '(min-height: 651px) and (max-height: 712px) and (max-width: 768px)' },
        'h-md-w-md': { 'raw': '(min-height: 651px) and (max-height: 712px) and (min-width: 769px) and (max-width: 1024px)' },
        'h-md-w-lg': { 'raw': '(min-height: 651px) and (max-height: 712px) and (min-width: 1025px)' },
        'h-lg-w-sm': { 'raw': '(min-height: 713px) and (max-width: 768px)' },
        'h-lg-w-md': { 'raw': '(min-height: 713px) and (min-width: 769px) and (max-width: 1024px)' },
        'h-lg-w-lg': { 'raw': '(min-height: 713px) and (min-width: 1025px)' },
      },
    },
  },
  variants: {},
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      const newUtilities = {
        ".hide-scrollbar": {
          /* Hide scrollbar for IE, Edge and Firefox */
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          /* Hide scrollbar for Chrome, Safari and Opera */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".button-text": {
          fontSize: "theme('fontSize.button-sm')",
          fontFamily: "Montserrat, sans-serif",
          lineHeight: "1.5",
          "@media (min-width: 1024px)": {
            fontSize: "theme('fontSize.button-md')",
          },
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
export default config;
