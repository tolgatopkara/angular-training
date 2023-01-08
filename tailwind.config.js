/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      rotate: {
        225: '225deg',
        270: '270deg',
        315: '315deg',
        360: '360deg',
      },
    },
  },
  plugins: [],
}
