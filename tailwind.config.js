/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2f3a4a",
        secondary: "#161e2f",
        tetiary: "#1F2937",
      },
      backgroundColor: {
        overlay: "rgba(0, 0, 0, 0.2)",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
