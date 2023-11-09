/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans_serif"],
        fraunces: ["Fraunces", "sans_serif"],
      },
    },
  },
  plugins: [],
};
