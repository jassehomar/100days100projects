const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Mulish", ...defaultTheme.fontFamily.sans],
      },
      flex: {
        half: "0.5",
        5: "5",
      },
      height: {
        "screen-75": "75vh",
        "screen-78": "78vh",
        "screen-80": "80vh",
      },
      width: {
        30: "7.5rem",
      },
      borderRadius: {
        "4xl": "3.3rem",
        "5xl": "3.8rem",
      },
      transitionDelay: {
        0: "0ms",
      },
      transitionDuration: {
        600: "600ms",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
