/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        custom: ['Agbalumo', 'sans-serif'],
        monster:['Montserrat', 'sans-serif'],
        plus:['M PLUS Rounded 1c', 'sans-serif'],
      },
      
    },
  
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}

