module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    textShadow: ["responsive", "hover", "focus"],
    extend: {},
  },
  plugins: [require("tailwindcss-textshadow")],
};
