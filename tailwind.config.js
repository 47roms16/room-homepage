/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.js"],
  theme: {
    fontFamily: {
      "league-spartan": ["League Spartan", "sans-serif"],
    },
    extend: {
      colors: {
        "dark-gray": "hsl(0, 0%, 63%)",
        "very-dark-gray": "hsl(0, 0%, 27%)",
        "nav-bg": "rgba(0,0,0,0.5)",
      },
      screens: {
        xs: "376px",
      },
    },
  },
  plugins: [],
};
