/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nanum: ["var(--font-nanum)"],
        blackhan: ["var(--font-blackhan)"],
      },
      colors: {
        primaryText: "#11111",
        primaryWhite: "#c0daee",
      },
      zIndex: {
        "-1": "-1",
      },
      keyframes: {
        "scale-in-x": {
          "0%": { opacity: 0, transform: "scaleX(0)" },
          "100%": { opacity: 1, transform: "scaleX(1)" },
        },
        "scale-in-y": {
          "0%": { opacity: 0, transform: "scaleY(0)" },
          "100%": { opacity: 1, transform: "scaleY(1)" },
        },
        "scale-out-x": {
          "0%": { opacity: 1, transform: "scaleY(1)" },
          "100%": { opacity: 0, transform: "scaleY(0)" },
        },
        "scale-out-y": {
          "0%": { opacity: 1, transform: "scaleY(1)" },
          "100%": { opacity: 0, transform: "scaleY(0)" },
        },
        "scale-in-center": {
          "0%": { opacity: 0, transform: "scale(0)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        "fade-slide-left": {
          "0%": { opacity: 0, transform: "translateX(100px)" },
          "100%": { opacity: 1, transform: "translateX(0px)" },
        },
        "fade-slide-right": {
          "0%": { opacity: 0, transform: "translateX(0px)" },
          "100%": { opacity: 1, transform: "translateX(20px)" },
        },
        "fade-slide-top-out": {
          "0%": { opacity: 1, transform: "translateY(20px)" },
          "100%": { opacity: 0, transform: "translateY(0px)" },
        },
        "fade-slide-bottom": {
          "0%": { opacity: 0, transform: "translateY(0px)" },
          "100%": { opacity: 1, transform: "translateY(20px)" },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "bounce-up-down": {
          "0%": { opacity: 1, transform: "translateY(0)" },
          "50%": { opacity: 1, transform: "translateY(8px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
      },
      animation: {
        "fade-slide-left": "fade-slide-left 0.5s ease-in-out forwards",
        "fade-slide-right": "fade-slide-right 0.5s ease-in-out forwards",
        "fade-slide-bottom": "fade-slide-bottom 0.5s ease-in-out forwards",
        "fade-slide-top-out": "fade-slide-top-out 0.5s ease-in-out forwards",
        "bounce-up-down": "bounce-up-down 2s ease-in-out infinite",
        "scale-in-x": "scale-in-x 1s ease-in-out forwards",
        "scale-in-y": "scale-in-y 1s ease-in-out forwards",
        "scale-in-center": "scale-in-center 1s ease-in-out forwards",
        "scale-out-x": "scale-out-x 1s ease-in-out forwards",
        "scale-out-y": "scale-out-y 1s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
