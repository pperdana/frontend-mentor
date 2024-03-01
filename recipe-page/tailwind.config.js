/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        youngSerif: ["Young Serif", "serif"],
        outfit: ["Outfit", "sans-serif"],
      },
    },
    screens: {
      // tall: { raw: "(min-height: 900px)" },
      // lg: { max: "75em" },
      // sm: { max: "31em" },
    },
  },
  plugins: [],
};
