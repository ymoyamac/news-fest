/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    theme: {
      screens: {
        'tablet': '640px',
      },
    }
  },
  plugins: [require("daisyui")],
}