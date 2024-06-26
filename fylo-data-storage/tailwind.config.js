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
      raleway: ["Raleway", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        desktop: "url('/src/assets/bg-desktop.png')",
        mobile: "url('/src/assets/bg-mobile.png')",
      },
    },
    screens: {
      // Screen for Tablet
      // tall: { raw: "(min-height: 900px)" },
      // Screen for various width
      // lg: { max: "75em" },
      // md: { max: "42em" },
      sm: { max: "48em" },
    },
  },
  plugins: [],
};
