module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chineseorange: "#E47041",
        rust: "#B54213",
        darkgray: "#121212",
      },
      height: {
        100: "40rem",
        99: "36rem",
      },
      fontFamily: {
        barlow: ["Barlow Condensed", "sans-serif"],
      },
      scale: {
        flip: "-1",
      },
    },
  },

  plugins: [],
};
