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
        'sahibindenyellow': '#fee906',
        'sahibindenblue': '#185e91',
        'sahibindengray': '#f2f2f2',
        'dividercolor': '#cdcdcd'
      }
    },
  },
  plugins: [],
};
