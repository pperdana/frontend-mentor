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
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {},
    screens: {
      // Screen for Tablet
      // tall: { raw: "(min-height: 900px)" },
      // Screen for various width
      lg: { max: "68.75em" },
      md: { max: "43.75em" },
      sm: { max: "30em" },
    },
  },
  plugins: [],
};
