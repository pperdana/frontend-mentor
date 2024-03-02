/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // youngSerif: ["Young Serif", "serif"],
      },
    },
    screens: {
      // sm: { max: "23.5em" },
    },
  },
  plugins: [],
};
