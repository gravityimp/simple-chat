/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 1.8s linear infinite",
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "rotate(0deg)" },
          "12%": { transform: "rotate(20deg)" },
          "24%": { transform: "rotate(0deg)" },
          "36%": { transform: "rotate(-20deg)" },
          "50%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
    },
  },
  plugins: [],
};
