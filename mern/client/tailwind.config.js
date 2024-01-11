/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          bgDark: "#131418",
          textColor: "#babdc4",
        },
      },
    },
  },
  plugins: [],
};