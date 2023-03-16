/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        text: "text 5s ease infinite",
        fadeIn: "fadeIn 0.2s ease-in-out forwards",
      },

      fontSize: {
        sm: "0.875rem",
        base: ["0.875rem", "1rem", "1.125rem"],
        lg: ["1rem", "1.125rem", "1.25rem"],
        xl: ["1.125rem", "1.25rem", "1.5rem"],
        "2xl": ["1.25rem", "1.5rem", "1.875rem"],
        "3xl": ["1.5rem", "1.875rem", "2.25rem"],
        "4xl": ["1.875rem", "2.25rem", "3rem"],
        "5xl": ["2.25rem", "3rem", "4rem"],
        "6xl": ["3rem ", "4rem", "5.5rem"],
        "7xl": ["4rem ", "5.5rem", "7rem"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [],
};
