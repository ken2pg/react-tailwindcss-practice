const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    theme: {
      extend: {
        colors: {
          blueGray: colors.blueGray,
          coolGray: colors.coolGray,
          gray: colors.gray,
          trueGray: colors.trueGray,
          warmGray: colors.warmGray,
          red: colors.red,
          orange: colors.orange,
          amber: colors.amber,
          yellow: colors.yellow,
          lime: colors.lime,
          green: colors.green,
          emerald: colors.emerald,
          teal: colors.teal,
          cyan: colors.cyan,
          lightBlue: colors.lightBlue,
          indigo: colors.indigo,
          violet: colors.violet,
          purple: colors.purple,
          fuchsia: colors.fuchsia,
          pink: colors.pink,
          rose: colors.rose,
        },
      },
    },
  },
  plugins: [],
};
