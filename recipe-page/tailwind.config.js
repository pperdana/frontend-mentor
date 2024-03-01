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
      lg: { max: "50em" },
      md: { max: "34.4em" },
      sm: { max: "23.5em" },
    },
  },
  plugins: [],
};
