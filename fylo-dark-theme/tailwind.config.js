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
      open: ["Open Sans", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
    },
    extend: {},
    screens: {
      // Screen for Tablet
      // tall: { raw: "(min-height: 900px)" },
      // Screen for various width
      lg: { max: "62.5em" },
      md: { max: "47em" },
      sm: { max: "28em" },
    },
  },
  plugins: [],
};
