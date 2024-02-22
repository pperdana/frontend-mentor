/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
    },
    screens: {
      tall: { raw: "(min-height: 900px)" },
      lg: { max: "75em" },
    },
  },
  plugins: [],
};
