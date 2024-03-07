/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xl: "62.5%",
      base: "56.25%",
      sm: "50%",
    },
    fontFamily: {
      // poppins: ["Poppins", "sans-serif"],
    },
    extend: {},
    screens: {
      sm: { max: "28em" },
    },
  },
  plugins: [],
};
