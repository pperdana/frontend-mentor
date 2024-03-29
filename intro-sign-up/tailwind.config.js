/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      lg: { max: "78em" },
      md: { max: "61em" },
      sm: { max: "38em" },
    },
  },
  plugins: [],
};
