/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        fllopydisk: "#14003C",
        naggarothnight: "#3E3355",
        banafsajipurple: "#A80D55",
        burningfireflies: "#FF1464",
      },
      fontFamily: {
        hankengrotesk: ["Hanken Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
