/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/images/desktop/image-hero.jpg')",
        "hero-mobile": "url('/src/assets/images/mobile/image-hero.jpg')",
        earth: "url('assets/images/desktop/image-deep-earth.jpg')",
        "earth-mobile": "url('/src/assets/images/mobile/image-deep-earth.jpg')",
        arcade: "url('assets/images/desktop/image-night-arcade.jpg')",
        "arcade-mobile": "url('assets/images/mobile/image-night-arcade.jpg')",
        soccer: "url('assets/images/desktop/image-soccer-team.jpg')",
        "soccer-mobile": "url('assets/images/mobile/image-soccer-team.jpg')",
        grid: "url('assets/images/desktop/image-grid.jpg')",
        "grid-mobile": "url('assets/images/mobile/image-grid.jpg')",
        above: "url('assets/images/desktop/image-from-above.jpg')",
        "above-mobile": "url('assets/images/mobile/image-from-above.jpg')",
        borealis: "url('assets/images/desktop/image-pocket-borealis.jpg')",
        "borealis-mobile":
          "url('assets/images/mobile/image-pocket-borealis.jpg')",
        curiosity: "url('assets/images/desktop/image-curiosity.jpg')",
        "curiosity-mobile": "url('assets/images/mobile/image-curiosity.jpg')",
        fisheye: "url('assets/images/desktop/image-fisheye.jpg')",
        "fisheye-mobile": "url('assets/images/mobile/image-fisheye.jpg')",
        facebook: "url('assets/images/icon-facebook.svg')",
        twitter: "url('assets/images/icon-twitter.svg')",
        pinterest: "url('assets/images/icon-pinterest.svg')",
        instagram: "url('assets/images/icon-instagram.svg')",
      },
      fontFamily: {
        alata: ["Alata", "sans_serif"],
        josefin: ["Josefin Sans", "sans_serif"],
      },
    },
    screens: {
      xl: { max: "75em" },
      lg: { max: "51.25em" },
      md: { max: "37em" },
    },
  },

  plugins: [],
};
