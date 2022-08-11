/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "440px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      maxWidth: {
        "8xl": "1440px",
      },
      colors: {
        grayishBlue: "hsl(240, 2%, 79%)",
        VeryDarkGrayishBlue: "hsl(207, 13%, 34%)",
        darkBlackBlue: "hsl(240, 10%, 16%)",
        veryLightRed: "hsl(13, 100%, 72%)",
        lightRed: "hsl(353, 100%, 62%)",
        bgBodyVeryDarkGrayishBlue: "hsl(237, 17%,21%)",
        desaturatedBlue: "hsl(237, 23%, 32%)",
      },
      fontFamily: {
        overPass: ["Overpass", "sans-serif"],
        ubu: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
};
