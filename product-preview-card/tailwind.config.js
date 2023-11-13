/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans_serif"],
        fraunces: ["Fraunces", "sans_serif"],
      },
      backgroundImage: {
        parfume: "url('/public/images/image-product-desktop.jpg')",
        "parfume-mobile": "url('/public/images/image-product-mobile.jpg')",
      },
    },
    screens: {
      lg: { max: "37.5em" },
      md: { max: "32.6em" },
    },
  },
  plugins: [],
};
