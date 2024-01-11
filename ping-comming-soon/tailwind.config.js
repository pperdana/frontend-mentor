/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      md: { max: "39em" },
      sm: { max: "28em" },
    },
  },
  plugins: [],
};
