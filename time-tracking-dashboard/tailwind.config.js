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
      rubik: ["Rubik", "sans-serif"],
    },
    extend: {
      content: {
        workIcon: 'url("/src/assets/icon-work.svg")',
        playIcon: 'url("/src/assets/icon-play.svg")',
        studyIcon: 'url("/src/assets/icon-study.svg")',
        exerciseIcon: 'url("/src/assets/icon-exercise.svg")',
        socialIcon: 'url("/src/assets/icon-social.svg")',
        careIcon: 'url("/src/assets/icon-self-care.svg")',
      },
    },
    screens: {
      // Screen for Tablet
      // tall: { raw: "(min-height: 900px)" },
      // Screen for various width
      // lg: { max: "75em" },
      // md: { max: "42em" },
      // sm: { max: "28em" },
    },
  },
  plugins: [],
};
