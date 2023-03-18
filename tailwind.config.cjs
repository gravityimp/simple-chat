/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animationDirection: {
        "normal-reverse": "normal, reverse",
      },
      animation: {
        wiggle: "wiggle 1.8s linear infinite",
        dissapear: "dissapear .5s linear",
        appear: "dissapear .9s linear reverse",
        "move-in": "move .8s linear",
        "move-out": "move .5s linear reverse",
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
        dissapear: {
          "0%": { opacity: "100%" },
          "80%": { opacity: "20%", scale: "100%" },
          "100%": { opacity: "0%", scale: "80%", display: "none" },
        },
        move: {
          "0%": { top: "90%" },
          "100%": { top: "0%" },
        },
      },
    },
  },
  plugins: [],
};
