/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {},
    screens: {
      lg: { max: "75em" },
      md: { max: "42em" },
      sm: { max: "28em" },
    },
  },
  plugins: [],
};
