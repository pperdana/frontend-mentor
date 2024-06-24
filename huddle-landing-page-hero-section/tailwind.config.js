/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {},
    screens: {
      xl: { max: "71em" },
      lg: { max: "57.5em" },
      md: { max: "47.5em" },
      sm: { max: "31.25em" },
    },
  },
  plugins: [],
};
