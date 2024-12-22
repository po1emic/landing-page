/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      desktop: "1536px",
      tablet: "768px",
      mobile: "340px",
    },
    fontFamily: {
      prata: ["Prata", "serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
