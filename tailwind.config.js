/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{tsx,ts,js,jsx}"],

  theme: {
    extend: {
      keyframes: {
        fade: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        fade: "fade 5s ease-in-out reverse infinite",
      },
    },
  },
  plugins: [],
};
