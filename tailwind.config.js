/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        accentDark:   "#333333",
        accentBlue:   "#5A9BD5",
        accentOrange: "#F28C28",
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body:    ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}
