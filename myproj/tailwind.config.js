/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    color: {
      green: "#42f563",
      blue: "#5758ad",
      "primary-color": "#845887",
    },
    font: {
      primary: "Inter",
    },
  },
  plugins: [require("daisyui")],
};
