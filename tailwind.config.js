/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('/images/HeroImage.webp')",
        "children-image": "url('/images/ChildrenLearningImage.webp')",
        "comps-image": "url('/images/comps.jpg')",
      },
      colors: {
        blacky: "#44403C",
      },
    },
  },
  plugins: [],
};
