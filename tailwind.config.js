/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        body: ['Poppins', 'sans-serif']
      },
      screens: {
        '4xl': '1800px', 
      },
      colors: {
        primary: '#0ea5e9', 
        hover: '#0284c7', 
      },
    },
  },
  plugins: [],
}

