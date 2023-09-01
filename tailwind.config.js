/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-blur": "rgba(217, 217, 217, 0.16)",
        "yellow-bright": "#FFD728",
        "pink-bright": "#FF80D9",
        "dark-blue": "#240F3A",
      },
      fontFamily: {
        "Fuguz-One": ["Fugaz One", "cursive"],
        "Open-Sans": ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
