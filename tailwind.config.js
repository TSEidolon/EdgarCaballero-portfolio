/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-background':"url('src/assets/backgroundBricks.png')",
        'hero-background-two':"url('src/assets/leavesBanner.png')",
        'hero-background-test':"url('src/assets/leavesBannerOne.png')",
        'overview-background':"url('src/assets/leavesShadow.png')",

      }
    },
  },
  plugins: [],
}

