/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {

      md: { max: "710px" },

      sm: { max: "501px" },

      xs: { max: "400px" },
    },
    extend: {},
  },
  plugins: [],
};
