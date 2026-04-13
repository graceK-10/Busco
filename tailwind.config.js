/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#228B22",
        primaryDark: "#0F2D1A",
        accent: "#7FD6C2",
        surface: "#F6F8F7",
        text: "#1B1F1D",
        mint: "#DDF5EE",
        sage: "#A7CFA8",
        tealDeep: "#3E8E7E",
        border: "#D9E5DE",
      },
    },
  },
  plugins: [],
}