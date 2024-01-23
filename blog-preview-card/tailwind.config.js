/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      md: { max: "34em" },
      sm: { max: "26em" },
    },
  },
  plugins: [],
};
