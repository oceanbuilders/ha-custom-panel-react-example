/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'ob_bg_blue': '#2E73B4',
        'ob_hl_blue': '#5890C3'
      },
    }
  },
  plugins: [],
})
