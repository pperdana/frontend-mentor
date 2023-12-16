/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "desktop-pattern": "url('/src/assets/background-pattern-desktop.svg')",
        "mobile-pattern": "url('/src/assets/background-pattern-mobile.svg')",
      },
    },
    fontFamily: {
      "work-sans": ["Work Sans", "ui-sans-serif"],
    },
  },
  plugins: [],
};
