



/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "rainbow-border": "rainbow-border 1.5s infinite linear",
        "rainbow-fill": "rainbow-fill 2s infinite linear",
        "glow-hover": "glow-hover 1.5s infinite",
      },
      keyframes: {
        "rainbow-border": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        "rainbow-fill": {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "100% 100%" },
        },
        "glow-hover": {
          "0%, 100%": { boxShadow: "0 0 15px 5px rgba(255,255,255,0.5)" },
          "50%": { boxShadow: "0 0 30px 10px rgba(255,255,255,0.8)" },
        },
      },
    },
  },
  plugins: [],
};
