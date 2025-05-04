/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/screens/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sahibindenyellow: "#fee906",
        sahibindenblue: "#185e91",
        sahibindengray: "#f2f2f2",
        dividercolor: "#cdcdcd",
        sahibindenblur: "#eaf4fb",
        sahibindenilan: "#f7f7f7",
        sahibindentextblue: "#206ca8",
        sahibindendarkyellow: "#ffc51b",
        sahibindentextred: "#7a2534",
        sahibindenstatusgrey: "#7e7e7e",
        sahibindentextgrey: "#989898",
        progressgreen: "#289973",
      },
    },
  },
  plugins: [],
};
