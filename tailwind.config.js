/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      "purple" : "#6D597A", 
      "blue" : "#355070", 
      "pink" : "#B56576",
      "red" : "#E56B6F"
    },
    extend: {},
  },
  plugins: [],
})

