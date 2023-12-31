/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Agbalumo', 'sans-serif'],
        monster:['Montserrat', 'sans-serif'],
        plus:['M PLUS Rounded 1c', 'sans-serif'],
      },
      
    },
    daisyui: {
      themes: ["light", "dark", "cupcake"],
    },
  },
  plugins: [require("daisyui")],
}

