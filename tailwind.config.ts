import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'move-text': 'moveText 10s linear infinite',
      },
      keyframes: {
        moveText: {
          '0%': { transform: 'translateX(100%)' },  
          '100%': { transform: 'translateX(-100%)' },
        },
      }  
    }      
  },
  plugins: [],
} satisfies Config;
