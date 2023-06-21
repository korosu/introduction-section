/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Violet: "hsl(257, 40%, 49%)",
        Soft_Magenta: "hsl(300, 69%, 71%)",
      },
    },
  },
  plugins: [],
};
