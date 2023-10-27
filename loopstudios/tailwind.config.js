/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/images/desktop/image-hero.jpg')",
        earth: "url('assets/images/desktop/image-deep-earth.jpg')",
        arcade: "url('assets/images/desktop/image-night-arcade.jpg')",
        soccer: "url('assets/images/desktop/image-soccer-team.jpg')",
        grid: "url('assets/images/desktop/image-grid.jpg')",
        above: "url('assets/images/desktop/image-from-above.jpg')",
        borealis: "url('assets/images/desktop/image-pocket-borealis.jpg')",
        curiosity: "url('assets/images/desktop/image-curiosity.jpg')",
        fisheye: "url('assets/images/desktop/image-fisheye.jpg')",
      },
    },
  },
  plugins: [],
};
